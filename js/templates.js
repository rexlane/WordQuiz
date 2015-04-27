template = Handlebars.compile($("#sections-template").html());



function loadTemplates() {
	var context_length = context.body[0].elements.length;
	var random_entry = Math.floor((Math.random() * context_length) +1);
  	$("#content").html(template(context.body[0].elements[random_entry]));
<<<<<<< HEAD
}
=======
};

// function showExample () {
// 	$("#example-chunk").removeClass("hidden");
// };

// function showDef() {
// 	$("#def-chunk").removeClass("hidden");
// };

function showExample() {
	$("#example-chunk").toggle();
}

function showDef() {
	$("#def-chunk").toggle();
};
>>>>>>> master
