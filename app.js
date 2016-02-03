(function() {
	var RandomQuoteButton = document.querySelector('button.random-quote')
	  QuoteContainer = document.querySelector('.quote-text'),
		Author = document.querySelector('.said-by');

	newRandomQuote(quotes, QuoteContainer, Author);

	RandomQuoteButton.addEventListener('click', function() {
		document.querySelector('iframe').remove(); // We remove the previous button iframe
		newRandomQuote(quotes, QuoteContainer, Author);
		twttr.widgets.load(); // We force the reload using the twttr object that we have created in the index.html file
	});

	function newRandomQuote(quoteArray, quoteElement, authorElement) {

		var newQuote = quoteArray[randomGen(0, quoteArray.length - 1)];

		quoteElement.innerText = newQuote.quote;
		authorElement.innerText = newQuote.author;

		var tweetButton = generateTweetButton(newQuote.quote);
		document.querySelector('.main-container').appendChild(tweetButton);

		function randomGen(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}

	function generateTweetButton(text) {
		var tweetButton = document.createElement('a');
		tweetButton.setAttribute('href', 'https://twitter.com/share');
		tweetButton.setAttribute('class', 'twitter-share-button');
		tweetButton.setAttribute('data-count', 'horizontal');
		tweetButton.setAttribute('data-text', text);
		tweetButton.setAttribute('data-via', 'Randytorres23');
		return tweetButton;
	}
})();