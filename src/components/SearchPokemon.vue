<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { usePokemonSearch } from '@/composables/usePokemonSearch'
import ShowPoke from './ShowPoke.vue'
import { useTeamStore } from '@/stores/teamPoke'
import { useNotification } from '@/composables/useNotification'

const { query, onSearch, pokemon, loading, error, clearError } = usePokemonSearch()

const teamStore = useTeamStore()
const { error: notifyError } = useNotification()

//Agrego este computed para saber si una vez que el pokemon es cargado, si ya está en el equipo o no
const inTeam = computed(() => {
  if (pokemon.value) {
    return teamStore.inTeam(pokemon.value)
  }
  return false
})

watch(error, (val) => {
  if (val) {
    notifyError(val)
    clearError()
  }
})
</script>

<template>
  <nav class="p-10 flex justify-center border border-white rounded-3xl mx-4">
    <form @submit.prevent="onSearch" class="flex">
      <input
        class="px-72 py-2 rounded-2xl border border-gray-40 bg-white/80"
        v-model="query"
        placeholder="Ej: Ditto"
      />
      <button class="bg-green-500 text-white px-4 py-2 rounded-2xl" type="submit">Buscar</button>
    </form>
  </nav>

  <div v-if="loading" class="text-center font-bold text-white">Cargando...</div>
  <div v-else>
    <ShowPoke v-if="pokemon" :pokemon="pokemon" :inTeam="inTeam" class="w-1/4 h-1/2 mx-auto p-4 mt-16 bg-white/85 shadow-lg bg-opacity-25 mb-4" />
  </div>
</template>
