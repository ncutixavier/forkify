// Global app controller
/*import str from './models/Search'
//import {add,mult,ID} from './views/searchView'
import * as searchView from './views/searchView'

console.log(`Add is ${searchView.add(searchView.ID,2)}
multiply is ${searchView.mult(3,5)} and ${str}`)*/

//http://forkify-api.herokuapp.com/
//const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);;

import Search from './models/Search'
import { elements } from './views/base'
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

        //4. search for recipes
        await state.search.getResults()

        //5. render results in ui
        searchView.renderResults(state.search.result)
    }
}

elements.searchFrom.addEventListener('submit', e => {
    e.preventDefault()
    controlSearch()
})


















