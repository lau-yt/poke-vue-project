<script setup lang="ts">
import SearchPokemon from './components/SearchPokemon.vue'
import MyTeamPokemon from './components/MyTeamPokemon.vue'
import DetailsTeamPoke from './components/DetailsTeamPoke.vue'
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500">
        <h1 class="text-4xl font-bold text-center text-white">Mi PokéTeam</h1>
        <h2 class="text-xl text-center p-4 text-white">Descubre y elige tus Pokémon favoritos 🔴</h2>
        <MyTeamPokemon />
        <SearchPokemon />
        <DetailsTeamPoke />
    </div>
</template>

<style scoped></style>
