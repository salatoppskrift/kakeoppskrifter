export type Ingredient = {
    name: string,
    amount: number,
    measurement:
    | 'g'
    | 'dl'
    | 'ts'
}

export type Recipe = {
    id: string,
    name: string,
    ingredients: Ingredient[],
    minutes: number
}

export type GroceryList = Recipe[];