template = Handlebars.compile($("#sections-template").html());



function loadTemplates() {
	var context_length = context.body[0].elements.length;
	var random_entry = Math.floor((Math.random() * context_length) +1);
  	$("#content").html(template(context.body[0].elements[random_entry]));
}