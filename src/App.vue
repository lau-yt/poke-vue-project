<script setup lang="ts">
import SearchPokemon from './components/SearchPokemon.vue'
import MyTeamPokemon from './components/MyTeamPokemon.vue'
import DetailsTeamPoke from './components/DetailsTeamPoke.vue'
</script>

<template>
    <h1 class="text-2xl font-bold text-center">Tu equipo pokemon</h1>
    <MyTeamPokemon />
    <SearchPokemon />
    <DetailsTeamPoke />
</template>

<style scoped></style>
