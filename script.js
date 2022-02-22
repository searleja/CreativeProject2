document.getElementById("kanyeButton").addEventListener("click", function(event) {
    event.preventDefault();

    console.log("in js function");
    // setup URL
    const url = "https://api.kanye.rest/";
    // call API
    fetch(url)
      .then(function(response) {
        // make sure the request was successful
        if (response.status != 200) {
          return {
            text: "Error calling the Numbers API service: " + response.statusText
          }
        }
        return response.json();
      }).then(function(json) {
        // update DOM with response
        let result = "<p>Kanye Quote:<br>" + json.quote + "</p>";
        document.getElementById("results").innerHTML = result;
      });
});


document.getElementById("confusionButton").addEventListener("click", function(event) {
    event.preventDefault();

    console.log("in js confusion");

    document.getElementById("menu").innerHTML = "<li class=\"nav-item\"><a class=\"nav-link\" href=\"https://findtheinvisiblecow.com/\">This is your only option</a></li>";
});

document.getElementById("randomButton").addEventListener("click", function(event) {
    event.preventDefault();

    console.log("in js background");
    var myColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    document.body.style.background = myColor;
});
