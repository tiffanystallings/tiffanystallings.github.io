$('#send').submit(function(e) {
	$('.flash').text("");
	var name = $('#name').val();
	var email = $('#email').val();
	var text = $('#text').val();

	if (name && email && text) {
		console.log('Conditions met.');
		emailjs.send("gmail", "standard", 
			{
				"name": name, 
				"email": email,
				"message": text
			}).then(function(response) {
				console.log(response.status + response.text);
				$('.flash').text("Message sent!");
			}, function(err) {
				console.log(err);
				$('.flash').text("Unable to send message. Try again later!");
			});
		$('#name').val("");
		$('#email').val("");
		$('#text').val("");
	} else {
		$('.flash').text("All fields required.");
	}
	e.preventDefault();
});

$('#send').on('reset', function() {
	$('.flash').text("");
});