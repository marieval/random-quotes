const elements = {
    btnNew: document.getElementById("btn--new"),
    quoteText: document.getElementById("quote--text"),
    quoteAuthor: document.getElementById("quote--author")
}

getQuote = () => {
    /* const urlApi = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"; */
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(response => response.json())
        .then(data => {
            let quotes = data.quotes;
            let index = Math.floor(Math.random() * quotes.length);
            let quoteText = quotes[index].quote;
            let quoteAuthor = quotes[index].author;
            displayQuote(quoteText, quoteAuthor);
        })
        .catch(error => console.log("An error occurred", error));
}

displayQuote = (quote, author) => {
    elements.quoteText.textContent = quote;
    elements.quoteAuthor.textContent = author;
}

elements.btnNew.addEventListener("click", getQuote);