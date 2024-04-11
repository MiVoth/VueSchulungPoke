<script setup lang="ts">
import { type Pokemon, type IPokeApi, type PokeApi, type PokemonDetail  } from '../models/poke'
defineProps<{
    pokeDetail: PokemonDetail
}>()
// const pokeDetail = detail;
</script>

<template>
    <dl>
        <dt>Name</dt>
        <dd>{{ pokeDetail.name }}</dd>

        <dt>Order</dt>
        <dd>{{ pokeDetail.order }}</dd>

        <dt>Weight</dt>
        <dd>{{ pokeDetail.weight }}</dd>
    </dl>
</template>