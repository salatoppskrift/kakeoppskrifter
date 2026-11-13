<script setup lang="ts">
import type { Recipe } from '../types';

defineProps<{
    portions: number,
    recipe: Recipe
}>()
</script>

<template>
    <section>
        <h1>Tittel på oppskrift</h1>
        <p>{{ portions }} porsjoner - {{recipe.minutes}} min</p>
        <slot />
        <ul>
            <h2>Ingredienser(x)</h2>
            <li v-for="ingredient in recipe.ingredients">
                <span>
                    {{ ingredient.name }}
                </span>
                <span>
                    {{ ingredient.amount * portions }} {{ ingredient.measurement }}
                </span>
                <button>+ liste</button>
            </li>
        </ul>
        <button>Legg alle i handlelista</button>
    </section>
</template>

<style scoped></style>