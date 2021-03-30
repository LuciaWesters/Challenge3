
function getAPIdata() {
  var city = document.getElementById('city').value;
	var request = 'https://api.openweathermap.org/data/2.5/weather?&appid=25bb5f5788d41fc7bc086ff3ead3be52&lang=nl&q=' + city;

  fetch(request)

  .then(function(response){
    return response.json();
  })

  .then(function(response){

    console.log(response);

    var conclusie = document.getElementById('conclusie');
    conclusie.classList.remove('hidden');
    conclusie.classList.add('show');

    document.getElementById('plaats').innerHTML = city;

    var wel = document.getElementById('wel');
    var niet = document.getElementById('niet');

    var wolken = document.getElementById('wolken');
    var wind = document.getElementById('wind');
    var zicht = document.getElementById('zicht');
    var weer = document.getElementById('weer');

    wolken.innerHTML = 'Wolken: ' + response.clouds.all + '%';
    wind.innerHTML = 'Wind: ' + response.wind.speed + ' m/s';
    zicht.innerHTML = 'Zicht: ' + response.visibility + ' meter';
    weer.innerHTML = 'Weersomstandigheden: ' + response.weather[0].description;

    if(response.clouds.all >= 50){
      wolken.classList.add('red');
    }else{
      wolken.classList.add('green');
    };

    if(response.wind.speed >= 7.71){
      wind.classList.add('red');
    }else{
      wind.classList.add('green');
    };

    if(response.visibility <= 8046){
      zicht.classList.add('red');
    }else{
      zicht.classList.add('green');
    };

    if(response.weather[0].description == 'extreem'){
      weer.classList.add('red');
    }else{
      weer.classList.add('green');
    };


    if(response.clouds.all >= 50 || response.wind.speed >= 7.71 || response.visibility <= 8046 || response.weather[0].description == 'extreem'){
      wel.classList.add('hidden');
    }else{
      niet.classList.add('hidden');
    };

  });
}

function getAPI(){
  var city = document.getElementById('city').value;
  var request = 'https://gnews.io/api/v4/search?&lang=nl&token=fb94d31767b1ed71f0c3717c96a794a1&q=' + city;

  fetch(request)

  .then(function(response){
    return response.json();
  })

  .then(function(response){

    document.getElementById('ingevuldePlaats').innerHTML = city;

    var headlines = document.getElementById('headlines');
    headlines.classList.remove('hidden');
    headlines.classList.add('show');

    console.log(response);

    document.getElementById('artikel1').innerHTML = response.articles[0].title;
    document.getElementById('artikel1URL').innerHTML = response.articles[0].url;
    document.getElementById('artikel2').innerHTML = response.articles[1].title;
    document.getElementById('artikel2URL').innerHTML = response.articles[1].url;
    document.getElementById('artikel3').innerHTML = response.articles[2].title;
    document.getElementById('artikel3URL').innerHTML = response.articles[2].url;

  });
}

document.getElementById('cityButton').onclick = function(){
	getAPIdata();
  getAPI();
};
