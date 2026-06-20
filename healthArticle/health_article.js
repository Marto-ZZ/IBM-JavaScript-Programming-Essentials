// 1. Declare variables for XMLHttpRequest and JSON file URL
var xhr = new XMLHttpRequest();
var url = './health_article.json';

// 2. Prepare a GET request to the specified URL in asynchronous mode
xhr.open('GET', url, true);

// 3. Inform the XMLHttpRequest object that the expected response is in JSON format
xhr.responseType = 'json';

// 4. Define what should happen when the data is successfully loaded
xhr.onload = function() {
    // Retrieve the articles array from the JSON response
    var articles = xhr.response.articles;
    
    // Retrieve the HTML element where the fetched content will be displayed
    var articlesDiv = document.getElementById('articles');

    // 5. Iterate health data to fetch on the front page
    articles.forEach(function(article) {
        // Create the main container for each article
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        // Create and populate the title
        var title = document.createElement('h2');
        title.textContent = article.title;

        // Create and populate the description
        var description = document.createElement('p');
        description.textContent = article.description;

        // Create the Ways to Achieve section
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        // Create the Benefits section
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        // 6. Attach all these elements to the articleDiv
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        // 7. Attach the complete articleDiv to the main articlesDiv on the webpage
        articlesDiv.appendChild(articleDiv);
    });
};

// 8. Send the XMLHttpRequest to fetch the data
xhr.send();