export const elements = {
    searchFrom:document.querySelector('.search'),
    searchRes:document.querySelector('.results'),
    searchInput:document.querySelector('.search__field'),
    searchResList:document.querySelector('.results__list')
}

export const elementString={
    loader:'loader'
}

export const renderLoader=parent=>{
    const loader = `
    <div class="${elementString.loader}">
        <svg class="search__icon">
            <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>
    `
    parent
}