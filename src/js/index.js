// Global app controller
/*import str from './models/Search'
//import {add,mult,ID} from './views/searchView'
import * as searchView from './views/searchView'

console.log(`Add is ${searchView.add(searchView.ID,2)}
multiply is ${searchView.mult(3,5)} and ${str}`)*/

//http://forkify-api.herokuapp.com/
//const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);;

import Search from './models/Search'
import { elements, renderLoader, clearLoader } from './views/base'
import * as searchView from './views/searchView'
/*GLOBAL STATE APP
* search object
* current object
* shopping list
* liked object
*/
const state = {}

const controlSearch = async () => {
    //1. get search query
    const query = searchView.getInput()

    if (query) {
        //2. new search object and save to state
        state.search = new Search(query)

        //3. prepare for ui
        searchView.clearInput()
        searchView.clearResult()
        renderLoader(elements.searchRes)

        //4. search for recipes
        await state.search.getResults()

        //5. render results in ui
        clearLoader()
        searchView.renderResults(state.search.result)
    }
}

elements.searchFrom.addEventListener('submit', e => {
    e.preventDefault()
    controlSearch()
})

elements.searchResPage.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline')
    if (btn) {
        const gotoPage = parseInt(btn.dataset.goto, 10)
        console.log(gotoPage)
        searchView.clearResult()
        searchView.renderResults(state.search.result, gotoPage)
    }
})

















