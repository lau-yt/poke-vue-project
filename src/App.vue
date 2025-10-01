<script setup lang="ts">
import SearchPokemon from './components/SearchPokemon.vue'
import MyTeamPokemon from './components/MyTeamPokemon.vue'
import DetailsTeamPoke from './components/DetailsTeamPoke.vue'
</script>

<template>
    <h1 class="text-4xl font-bold text-center">Mi PokeTeam</h1>
    <h2 class="text-xl text-center p-4">Descubre y elige tus Pokémon favoritos 🔴</h2>
    <MyTeamPokemon />
    <SearchPokemon />
    <DetailsTeamPoke />
</template>

<style scoped></style>
