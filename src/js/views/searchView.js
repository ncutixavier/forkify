// export const add = (a, b) => a + b
// export const mult = (a, b) => a * b
// export const ID = 23

import { elements } from './base'

export const getInput = () => elements.searchInput.value

export const clearInput = () => {
    elements.searchInput.value = ''
}

export const clearResult = () => {
    elements.searchResList.innerHTML = ''
}

const limitRecipeTitle = (title, limit = 18) => {
    const newTitle = []
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur)
            }
            return acc + cur.length //return in order to continue loooppp
        }, 0)
        return `${newTitle.join(' ')} ...`
    }
    return title
}

const renderRecipe = recipe => {
    let markup = `
        <li>
            <a class="results__link" href="${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `
    elements.searchResList.insertAdjacentHTML('beforeend', markup)
}

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    // console.log(recipes)
    const start = (page - 1) * resPerPage
    const end = page*resPerPage

    recipes.slice(start, end).forEach(renderRecipe)
}