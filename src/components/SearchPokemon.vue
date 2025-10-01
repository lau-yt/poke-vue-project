<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePokemonSearch } from '@/composables/usePokemonSearch'
import ShowPoke from './ShowPoke.vue'
import { useTeamStore } from '@/stores/teamPoke'

const { query, onSearch, pokemon, loading, error } = usePokemonSearch()

const teamStore = useTeamStore()

//Agrego este computed para saber si una vez que el pokemon es cargado, si ya está en el equipo o no
const inTeam = computed(() => {
  if (pokemon.value) {
    return teamStore.inTeam(pokemon.value)
  }
  return false
})
</script>

<template>
  <nav class="p-10 flex justify-center border border-white rounded-3xl mx-4">
    <form @submit.prevent="onSearch" class="flex">
      <input
        class="px-72 py-2 rounded-2xl border border-gray-40 bg-white"
        v-model="query"
        placeholder="Ej: Ditto"
      />
      <button class="bg-green-500 text-white px-4 py-2 rounded-2xl" type="submit">Buscar</button>
    </form>
  </nav>

  <ShowPoke v-if="pokemon" :pokemon="pokemon" :isLoading="loading" :inTeam="inTeam" class="w-1/4 mx-auto p-4 mt-16 bg-yellow-50 shadow-lg bg-opacity-25 mb-4" />
</template>
