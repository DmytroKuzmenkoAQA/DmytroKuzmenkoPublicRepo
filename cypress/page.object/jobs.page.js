class JobsPage {

    get inputSearchField() { return cy.get('[class="row nopadding location-search-bar"] [id="search_typeahead"]')}
    get startSearchButton() { return cy.get('#search-button')}
    get paginationNumber() { return cy.get('.page-button')}
    
    
}