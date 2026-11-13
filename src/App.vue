<script setup lang="ts">
import { ref } from 'vue';
import {v4 as uuidv4} from 'uuid';
import type { Ingredient as IngredientType, Recipe as RecipeType, GroceryList as GroceryListType} from './types.ts';
import GroceryList from './components/GroceryList.vue';
import Recipe from './components/Recipe.vue';

const recipes = ref<RecipeType[]>([
  {
    id: uuidv4(),
    name: "carrotcake",
    ingredients: [
      {
        name: "carrot",
        amount: 200,
        measurement: 'g'
      },
    ],
    minutes: 45
  }
]);
const groceryList = ref<GroceryListType>(
  recipes.value
);

</script>

<template>
  <main>
    <Recipe :portions="1" :recipe="recipes[0]">
      
    </Recipe>
    <GroceryList />
  </main>
</template>
