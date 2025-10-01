<script setup lang="ts">
import { useTeamStore } from '@/stores/teamPoke'

const team = useTeamStore()
</script>

<template>
  <div class="mt-10 mb-4 border border-white p-8 rounded-3xl mx-4 text-white">

    <h2 class="text-xl text-left mb-4 font-bold ">Tu equipo Pokémon: {{ team.team.length }} de 6</h2>

    <div v-if="team.team.length === 0" class="text-center">
      Todavia no tienes pokemons en tu equipo.
    </div>

    <div v-else class="grid grid-cols-6 justify-center">
      <img
        v-for="poke in team.team"
        class="rounded-full border border-amber-100 bg-white/85 p-2 shadow-lg w-32 h-auto"
        :src="poke.image"
        :alt="poke.name"
      />  
    </div>
  </div>
</template>

<style scoped></style>
