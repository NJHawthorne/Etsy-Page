var manageData = function(data) {
	var displayResults = $('.search-result-section');
	data.results.forEach(function(value, index, array) {
		var container = $('<div class="itemContainer"></div>');
		var containerLink = $('<a></a>', {'href': value.Shop.url});
		var newResultItem = $('<img/>', {'src': value.Images[0].url_fullxfull, 'width': '252', 'height': '150'});
		var newResultTitle = $('<h3 class="itemTitle"></h3>', {'title': value.title}).html(value.title);
		var newResultMaker = $('<span class="itemMaker"></span>', {'title': value.title}).html(value.Shop.shop_name);
		var newResultPrice = $('<span class="itemPrice"></span>', {'title': value.title}).html('$'+value.price+' USD'); 
		containerLink.append(newResultItem);
		containerLink.append(newResultTitle);
		containerLink.append(newResultMaker);
		containerLink.append(newResultPrice);
		container.append(containerLink);
		displayResults.append(container);
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