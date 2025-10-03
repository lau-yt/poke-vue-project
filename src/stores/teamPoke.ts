import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Pokemon } from '../composables/usePokemonSearch'

export const useTeamStore = defineStore('team', () => {
  const team = ref<Pokemon[]>([])

  function addMyTeam(pokemon: Pokemon) {
    if (team.value.length > 5) {
      throw new Error('Ups, el equipo esta lleno')
    }
    team.value.push(pokemon)
  }

  function removeFromTeam(pokemon: Pokemon) {
    team.value = team.value.filter((p) => p.id !== pokemon.id)
  }

  function inTeam(pokemon: Pokemon) {
    return computed(() => team.value.some((p) => p.id === pokemon.id)).value
  }

  return { team, addMyTeam, removeFromTeam, inTeam }
})
