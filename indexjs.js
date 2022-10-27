  // In body tag
  $('body').terminal({
	iam: function (name) {
		this.echo('Hello, ' + name +
			'. Welcome to my website');
	}
}, {
	greetings: 'ishkevin website - A place to'
			+ ' learn more about me'
			+ ' as software engineer'
});

$('body').terminal({
	iam: function (name) {
		this.echo('Hello, ' + name
		+ '. Welcome to GeeksForGeeks');
	},
	founder: function () {
		this.echo('Sandeep Jain');
	},
	help: function () {
		this.echo('iam - iam command and'
		+ ' pass your name as argument'
		+ '\nfounder to know the founder');
	},
}, {
	greetings: 'GeeksForGeeks - A place to'
	+ ' learn DS, Algo and Computer Science'
	+ ' for free'
});
