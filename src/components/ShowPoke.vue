<script setup lang="ts">
import type { Pokemon } from '@/composables/usePokemonSearch'
import { useTeamStore } from '@/stores/teamPoke'

defineProps<{
  pokemon: Pokemon
  isLoading?: boolean
  inTeam?: boolean
}>()

const teamStore = useTeamStore()
</script>

<template>
  <section>
    <div v-if="isLoading">Cargando...</div>
    <div v-else>
      <h1 class="text-xl font-bold text-left">{{ pokemon.name }}</h1>
      <p class="text-left">{{ pokemon.order }}</p>
      <img class="mt-4 mx-auto block" :src="pokemon.image" :alt="pokemon.name" />
      <ul class="mt-4 flex justify-center gap-2">
        <img
          v-for="type in pokemon.types"
          :key="type.name"
          :src="type.image"
          :alt="type.name"
          class="w-16 h-auto"
        />
      </ul>
      <p><strong>Altura:</strong> {{ pokemon.height }}</p>
      <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
      <div class="flex justify-center gap-2">
        <button
          v-if="!inTeam"
          @click="teamStore.addMyTeam(pokemon)"
          class="mt-4 bg-green-500 text-white p-2 rounded-2xl hover:bg-green-600 text-center"
        >
          Añadir a mi equipo
        </button>
        <button
          v-else
          @click="teamStore.removeFromTeam(pokemon)"
          class="mt-4 bg-red-500 text-white p-2 rounded-2xl hover:bg-red-600 text-center"
        >
          Quitar de mi equipo
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
