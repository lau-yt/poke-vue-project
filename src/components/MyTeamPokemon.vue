<script setup lang="ts">
import { useTeamStore } from '@/stores/teamPoke'

const team = useTeamStore()
</script>

<template>
  <div class="mt-10 mb-4">

    <div v-if="team.team.length === 0" class="text-center">
      Todavia no tienes pokemons en tu equipo
    </div>

    <div v-else class="grid grid-cols-6 gap-4 mx-2 justify-center items-center flex">
      <img
        v-for="poke in team.team"
        class="mt-4 rounded-full border border-amber-100 bg-yellow-50 p-2 shadow-lg w-32 h-auto"
        :src="poke.image"
        :alt="poke.name"
      />
    </div>
  </div>
</template>

<style scoped></style>
