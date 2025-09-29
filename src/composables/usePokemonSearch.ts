import { ref } from 'vue'

export interface Type {
  name: string
  image: string
}

export interface Pokemon {
  name: string
  id: number
  weight: number
  height: number
  image: string
  order: number
  types: Type[]
}

const imageTypes: Record<string, string> = {
  normal:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/1.png',
  fire: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/10.png',
  water:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/11.png',
  grass:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/12.png',
  electric:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/13.png',
  ice: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/15.png',
  poison:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/4.png',
  bug: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/7.png',
  dragon:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/16.png',
  steel:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/9.png',
  fairy:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/18.png',
  fighting:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/2.png',
  flying:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/3.png',
  ghost:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/8.png',
  rock: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/6.png',
  ground:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/5.png',
  psychic:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/14.png',
  dark: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vi/omega-ruby-alpha-sapphire/17.png',
}

export const getImageType = (type: Type) => {
  return imageTypes[type.name] ?? 'default'
}

export function usePokemonSearch() {
  const query = ref<string | null>(null)
  const loading = ref<boolean | null>(null)
  const error = ref<string | null>(null)
  const pokemon = ref<Pokemon | null>(null)

  async function fetchPokemon(name: string) {
    const n = name.trim().toLowerCase()
    if (!n) {
      pokemon.value = null
      error.value = null
      return
    }

    loading.value = true

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`)
      if (!res.ok) {
        if (res.status === 404) {
          pokemon.value = null
          error.value = 'Pokemon no encontrado'
          return
        }
        throw new Error('HTTP' + res.status)
      }

      const data = await res.json()

      const image =
        data?.sprites?.other?.['official-artwork']?.front_default ||
        data?.sprites?.front_default ||
        ''

      const types = await Promise.all(
        data.types.map(async (t: any) => ({
          name: t.type.name,
          image: getImageType(t.type),
        })),
      )

      pokemon.value = {
        name: data.name,
        id: data.id,
        weight: data.weight,
        height: data.height,
        image,
        order: data.order,
        types,
      }
    } catch (e) {
      console.log(e)
      error.value = 'Tuvimos problemas con la consulta'
    } finally {
      loading.value = false
    }
  }

  function onSearch() {
    if (query.value !== null) {
      fetchPokemon(query.value)
    }
  }

  return { query, loading, error, pokemon, onSearch }
}
