$("#add-item-btn").click(function() {
	var newItem = $("#new-item").val();

	$("#items").append("<li>" + newItem + " " + "<button class=\"delete\">X</button>" + "</li>");

	$('#new-item').val('');
});



$(document).on('click', '.delete', function() {
	$(this).parent().remove();
});