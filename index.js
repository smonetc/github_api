'use strict';

function getRepo(search){
    const url = `"https://api.github.com/users/${search}/repos`;
    fetch(url)
    .then(response => {
        if (response.ok){
            return response.json();
        }   
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
    })
}

// fix myself
function displayResults(){
    console.log(responseJson);

    // $(#js-form).empty();
    $('.results').empty();
    responseJson.forEach(function(repo){
    $("#result-list").append(`<li>${repo.name} ${repo.owner.url}</li>`);
    $('#result-list').removeClass('hidden');
    });
}

// fix myself
function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      let reposearch = $('input[name="reposearch"]').val();
      getRepo(reposearch);
    });
  }

  watchForm();