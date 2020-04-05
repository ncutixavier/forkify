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
    elements.searchResPage.innerHTML=''
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

//previous or next type
const createButton = (page, type) => `

    <button class="btn-inline results__btn--${type}" data-goto="${type === 'prev' ? page - 1 : page + 1}">
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>    
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>

`

const renderButton = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage)

    let button
    if (page === 1 && pages > 1) {
        //to ggo to next pagge
        button = createButton(page, 'next')

    } else if (page < pages) {
        //both pagge
        button = `
        ${createButton(page, 'prev')}
        ${createButton(page, 'next')}
        `

    } else if (page === pages && pages > 1) {
        //go to prev page
        button = createButton(page, 'prev')

    }

    elements.searchResPage.insertAdjacentHTML('afterbegin', button)
}

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    // console.log(recipes)
    //render result of current pages
    const start = (page - 1) * resPerPage
    const end = page * resPerPage

    recipes.slice(start, end).forEach(renderRecipe)

    //render pagination button
    renderButton(page, recipes.length, resPerPage)
}