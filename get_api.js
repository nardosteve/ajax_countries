function showMovies(){

    let data = null;

    //Creating object to make requests
    let xhr = new XMLHttpRequest();

    //Include the relevant credentials with the AJAX request
    xhr.withCredentials = true;

    //Call back function with response
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log("Success");

            try{
                //Save response to movies variable
                let response = JSON.parse(this.responseText);

                //Get array name
                movies = response['titles'];

                //Loop through the movies array
                movies.forEach(movie => {
                   //console.log(movie.jawSummary.title);
                   //console.log(movie.jawSummary.releaseYear);
                   let movieTitle = document.createElement('div');
                   movieTitle.innerHTML = movie.jawSummary.title;

                   document.getElementById('feed').appendChild(movieTitle);
                 });

            }catch(error){
                console.log('Error parsing JSON:', error);
            }

        }
    }

    //Send a request to the server
    xhr.open('GET', 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en');

    //To POST data like an HTML form, add an HTTP header
    xhr.setRequestHeader('X-RapidAPI-Key', '934d8b23afmsh288ffa2f68508c9p180fa0jsn2495ee03f456');
    xhr.setRequestHeader('X-RapidAPI-Host', 'netflix54.p.rapidapi.com');

    //Send request
    xhr.send(data);
}