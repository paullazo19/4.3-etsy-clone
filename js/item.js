var $ = require('jquery');

var $results = $("[data-js='results']");
var $inputButton = $("[data-js='input_button']");
var $inputField = $("[data-js='input_field']");

this.insertData = function(){

  $inputField.on("keyup", function(e){

    $searchText = $(e.target);
    e.preventDefault();

  $inputButton.on("click", function(e){
    $keyword = $searchText.val();
    $results.empty();

      $.getJSON("https://openapi.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=" + $keyword + "&includes=Images&callback=?", function(data){

        data.results.forEach(function(results){

        $results.append(`

          <div class="column grid__col--6">
            <li class="result">
              <a class="result__image" href="#">
                <img src="${results.Images[0].url_170x135}" alt="${results.description}" />
              </a>
              <div class="result__footer">
                <p class="result__description" data-js="result_description">
                  ${results.title}
                </p>
                <p class="result__company" data-js="result_company">
                  ${results.who_made}
                </p>
                <p class="result__price" data-js="result_price">
                  ${results.price}
                </p>
              </div>
            </li>
          </div>

        `)
        $searchText.val("");
        })
      })
  });
  })
}
