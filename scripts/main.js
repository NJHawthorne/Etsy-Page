var manageData = function(data) {
	var displayResults = $('.search-result-section');
	data.results.forEach(function(value, index, array) {
		var newResultTitle = $('<div class="itemTitle"></div>', {'title': value.title}).html(value.title);
		var newResultMaker = $('<div class="itemMaker"></div>', {'title': value.title}).html(value.Shop.shop_name);
		var newResultPrice = $('<div class="itemPrice"></div>', {'title': value.title}).html(value.price);
		displayResults.append(newResultTitle);
		displayResults.append(newResultMaker);
		displayResults.append(newResultPrice);
	});
};

var etsySettings = {
	url: 'https://api.etsy.com/v2/listings/active.js?api_key=6l5s7td5n29eqxjxza7h0yxn&keywords={whiskey}&includes=Images,Shop',
	dataType: 'jsonp',
	type: 'GET',
	success: manageData,
	error: function(err) {
		console.log('YOU DUN MESSED UP NOW SON');
	},
	complete: function() {
		console.log('Achievement get: Etsy Data');
	}
};

$.ajax(etsySettings);