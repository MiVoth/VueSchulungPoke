<script setup lang="ts">
import { Pokemon, type IPokeApi, PokeApi, PokemonDetail  } from './models/poke'

import { ref, type Ref } from 'vue';
import PokemonDetailComponent from './components/PokeDetailComponent.vue';

const message: Ref<string> = ref('Hello Vue 3 Grundkurs');
const haha = 'Lala';

const yesno: Ref<boolean> = ref(true);
const changeMessage = () => {
  message.value = `Geändert ${new Date()}`
}
const yesNo = () => {
  yesno.value = !yesno.value;
}
const vieleSachen = [];
// interface IPokeApi {
//   count: number;
//   next: string;
//   results: Array<Pokemon>;
// }
// class PokeApi implements IPokeApi {
//   count: number = 0;
//   next: string = '';
//   results: Array<Pokemon> = [];
// }
// class Pokemon {
//   name?: string;
//   url?: string;
// }

// class PokemonDetail {
//   name: string = '';
//   order: number = 0;
//   weight: number = 0;
// }

const pokeCount: Ref<number> = ref(0);
  const myPokemon: Ref<Array<Pokemon>> = ref([]);
fetch('https://pokeapi.co/api/v2/pokemon?offset=10&limit=30').then(resp => resp.json()).then(resp => {
  const pokeApi = resp as IPokeApi;
  pokeCount.value = pokeApi.count;
  myPokemon.value = pokeApi.results;

  for (let res in pokeApi.results) {
  }
});

const pokeDetail: Ref<PokemonDetail> = ref(new PokemonDetail);
const loadPokeDetails = (url?: string, event?: any) => {
  event.preventDefault();
  fetch(`${url}`).then(resp => resp.json()).then(resp => {
    const myDetail = resp as PokemonDetail;
    pokeDetail.value = myDetail;
  });
  return false;
}

</script>

<template>
  <h1>Vue 3 Grundkurs</h1>
  <hr />
  <div>{{ pokeCount }}</div>
  <PokemonDetailComponent :poke-detail="pokeDetail"></PokemonDetailComponent>
  <!-- <dl>
    <dt>Name</dt>
    <dd>{{  pokeDetail.name }}</dd>

    <dt>Order</dt>
    <dd>{{  pokeDetail.order }}</dd>

    <dt>Weight</dt>
    <dd>{{  pokeDetail.weight }}</dd>
  </dl> -->
  <ul v-for="pokemon in myPokemon">
    <li>
      <a v-bind:href="pokemon.url" @click="(event) => loadPokeDetails(pokemon.url, event)">{{ pokemon.name }}</a>
    </li>
  </ul>
  <HelloWorld msg="Hello"></HelloWorld>
  <HelloWorld :msg="message"></HelloWorld>
  <strong>{{ haha }}</strong>
  <button @click="changeMessage">Ändere</button>
  <button @click="yesNo">YesNo</button>
  <div v-if="yesno">
    <p style="color:red;">Hahahaha</p>
  </div>
  <ul>
    <!-- <li v-for="vieleSachen"></li> -->
  </ul>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
