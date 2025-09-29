<script setup lang="ts">
import { useTeamStore } from '@/stores/teamPoke'
import ShowPoke from './ShowPoke.vue'
const team = useTeamStore()

</script>

<template>
    <h1 v-if="team.team.length > 0" class="text-2xl font-bold text-center mt-10">Mas detalles de mi equipo pokemon:</h1>
    <div v-if="team.team.length > 0" class="flex flex-col items-center border border-pink-400 p-4 grid grid-cols-3 gap-4">
        <div v-for="poke in team.team" :key="poke.id">
            <ShowPoke :pokemon="poke" :isLoading="false" :inTeam="true" class="w-1/2 mx-auto p-4 mt-16 bg-yellow-50 shadow-lg bg-opacity-25 mb-4" />
        </div>
    </div>
</template>

<style scoped></style>
