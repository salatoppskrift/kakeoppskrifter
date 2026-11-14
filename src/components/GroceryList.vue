<script setup lang="ts">
import type { GroceryList, Ingredient } from '../types';

defineProps<{
    list: Ingredient[]
}>();
</script>

<template>
    <section>
        <h1>Handleliste</h1>
        <p>samlet fra x oppskrifter</p>
        <button>Tøm lista</button>
        <ul>
            <li v-for="item in list">
                {{ item.name }}: {{ item.amount }} {{ item.measurement }}
            </li>
        </ul>
    </section>
</template>

<style scoped></style>