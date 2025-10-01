<script setup lang="ts">
import { useTeamStore } from '@/stores/teamPoke'
import ShowPoke from './ShowPoke.vue'
const team = useTeamStore()

</script>

<template>
    <div v-if="team.team.length > 0" class="border border-white rounded-3xl mx-4 mt-10">
        <h1 v-if="team.team.length > 0" class="text-2xl font-bold text-left p-4 text-white">Detalles de mi equipo Pokémon</h1>
        <div class="items-center grid grid-cols-4">
            <div v-for="poke in team.team" :key="poke.id">
                <ShowPoke :pokemon="poke" :isLoading="false" :inTeam="true" class="max-w-sm mx-4 p-4 bg-white/85 shadow-lg bg-opacity-25 mb-4" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
