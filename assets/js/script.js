$(document).ready(function() {
  // $("#search-results").hide();

  // searchInput.oninput = () => {
  //   $("#search-results").show();
  // }
  
  // $("#searchInput").focus(() => {
  //   $("#search-results").show();
  // });

  // $("#searchInput").on('focus', function() {
  //   $("#search-results").show();
  // });

  // $("#searchInput").on('focus', function() {
  //   $("#loading").show();
  // });

  // $("#searchInput").focusout(() => {
  //   $("#search-results").hide();
  // });

  $(document).mouseup(function (e) {
    var searchBar = $("#search-bar");
    var searchResult = $("#search-results");
    var loading = $("#loading");
    if ((!searchResult.is(e.target) && searchResult.has(e.target).length === 0)
     && (!searchBar.is(e.target) && searchBar.has(e.target).length === 0)) {
      searchResult.hide();
      loading.hide();
    }
  });
});