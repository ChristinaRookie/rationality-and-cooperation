function displaySearchResults(results, store) {

  var localisedSearchResults = locales[pageLanguage].search['search-results'];
  var appendString = '';

  if (results.length) {

    appendString += '<div class="search-results" id="search-results">'

    appendString += '<h2>' + localisedSearchResults + '</h2>';

    if (results.length == 1) {
      var localisedSearchResultsNumberSuffix = locales[pageLanguage].search['results-for-singular'];
    } 
    else {
      var localisedSearchResultsNumberSuffix = locales[pageLanguage].search['results-for-plural'];
    }

    appendString += '<p>' + results.length + ' ' + localisedSearchResultsNumberSuffix;
    appendString +=  ' "<mark>' + searchTerm + '</mark>".</p>';

    appendString += '<ul>';

    for (var i = 0; i < results.length; i++) {
      var item = store[results[i].ref];
      appendString += '<li>';
      appendString += '<h3><a href="' + item.url + '?query=' + searchTerm + '">' + item.title + ' </a></h3>';
      appendString += '<p>' + item.excerpt + '</p>';
      appendString += '</li>';
    }

    appendString += '</ul>';

    appendString += '</div>';

  } else {
    var localisedSearchResultsNumberSuffix = locales[pageLanguage].search['results-for-none'];
    appendString += '<p>' + localisedSearchResultsNumberSuffix + ' "' + searchTerm + '".</p>';
  }

  searchForm.parentNode.innerHTML += appendString;
}

// Localise heading of search page
// (since all languages use same search.html)
function localiseSearchHeading() {
  if (document.querySelector('#content h1')) {
    var localisedSearchHeading = locales[pageLanguage].search['search-title'];
    var searchHeading = document.querySelector('#content h1');
    searchHeading.innerHTML = localisedSearchHeading;
  };
};

// Change language value in input for next search on results page
function localiseSearchLanguage() {
  if (document.querySelector('#search-language')) {
    var localisedSearchLanguage = document.querySelector('#search-language');
    localisedSearchLanguage.setAttribute('value', pageLanguage);
  };
}

function checkForSearchTerm() {
  if (searchTerm) {

    // perform the search
    var results = index.search(searchTerm, {
      bool: "AND"
    });

    // display the results
    displaySearchResults(results, store);
  };
};

localiseSearchHeading();
localiseSearchLanguage();
checkForSearchTerm();
