<script setup lang="ts">
import type { Pokemon } from '@/composables/usePokemonSearch'
import { useTeamStore } from '@/stores/teamPoke'
import { useNotification } from '@/composables/useNotification'

defineProps<{
  pokemon: Pokemon
  isLoading?: boolean
  inTeam?: boolean
}>()

const teamStore = useTeamStore()
const { success, error } = useNotification()

function toUpperCase(namePkm: String) {
  return namePkm.charAt(0).toUpperCase() + namePkm.slice(1)
}

function onAdd(pokemon: Pokemon) {
  try {
    teamStore.addMyTeam(pokemon)
    success('Pokemon añadido al equipo')
  } catch (e: any) {
    error(e?.message ?? 'No se pudo añadir al equipo')
  }
}

function onRemove(pokemon: Pokemon) {
  try {
    teamStore.removeFromTeam(pokemon)
    success('Pokemon eliminado del equipo')
  } catch (e: any) {
    error(e?.message ?? 'No se pudo eliminar del equipo')
  }
}

</script>


<template>
  <section>
    <div v-if="isLoading">Cargando...</div>
    <div v-else>
      <h1 class="text-xl font-bold text-left">{{ toUpperCase(pokemon.name) }}</h1>
      <p class="text-left"> #{{ pokemon.order }}</p>  

      <img class="mt-4 mx-auto block w-40 h-40 rounded-full object-contain p-2 bg-white shadow-lg" :src="pokemon.image" :alt="pokemon.name" />
      <ul class="mt-4 flex justify-center gap-2">
        <img
          v-for="type in pokemon.types"
          :key="type.name"
          :src="type.image"
          :alt="type.name"
          class="w-16 h-auto"
        />
      </ul>
      <div class="grid grid-cols-2 gap-2 mt-4 md:grid-cols-1 lg:grid-cols-2 ">
        <p class="bg-white p-4 md:p-2"><strong>Altura </strong> {{ pokemon.height }}m</p>
        <p class="bg-white p-4 md:p-2"><strong>Peso </strong> {{ pokemon.weight }}kg</p>
      </div>
      <div class="flex justify-center gap-2">
        <button
          v-if="!inTeam"
          @click="onAdd(pokemon)"
          class="mt-4 bg-green-500 text-white p-2 rounded-2xl hover:bg-green-600 text-center"
        >
          Añadir a mi equipo
        </button>
        <button
          v-else
          @click="onRemove(pokemon)"
          class="mt-4 bg-red-500 text-white p-2 rounded-2xl hover:bg-red-600 text-center"
        >
          Quitar de mi equipo
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
