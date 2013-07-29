Modernizr.load([
	{
	// The test: does the browser understand Media Queries?
		test : Modernizr.mq("only all"),
    // If not, load the respond.js file
		nope : '/javascripts/vendor/respond.src.js'
	},

	"/javascripts/site.js"
]);