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
        amount: 500,
        measurement: 'g'
      },
      {
        name: "flour",
        amount: 6,
        measurement: 'dl'
      },
      {
        name: 'sugar',
        amount: 4,
        measurement: 'dl'
      },
      {
        name: 'baking powder',
        amount: 1,
        measurement: 'ss'
      },
      {
        name: 'cinnamon powder',
        amount: 1,
        measurement: 'ts'
      }
    ],
    minutes: 45
  },
  {
    id: uuidv4(),
    name: "water pie",
    ingredients: [
      {
        name: "water",
        amount: 1.5,
        measurement: 'cup'
      },
      {
        name: "flour",
        amount: 4,
        measurement: 'ts'
      },
      {
        name: 'sugar',
        amount: 1,
        measurement: 'cup'
      },
      {
        name: 'vanilla extract',
        amount: 2,
        measurement: 'ts'
      },
      {
        name: 'butter',
        amount: 5,
        measurement: 'ts'
      }
    ],
    minutes: 75
  }
]);
const groceryList = ref<GroceryListType>(
  recipes.value
);

</script>

<template>
  <main>
    <Recipe :portions="5" :recipe="recipes[0]">
      
    </Recipe>
    <GroceryList :list="groceryList.flatMap(item => item.ingredients)"/>
  </main>
</template>
