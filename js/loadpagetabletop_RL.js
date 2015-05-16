// Page information that we will build on
var context = {
  "body": []
};


// Here's the Tabletop feed
// First we'll initialize Tabletop with our spreadsheet
var jqueryNoConflict = jQuery;
jqueryNoConflict(document).ready(function(){
//  RL's spreadsheet
  initializeTabletopObject('https://docs.google.com/spreadsheets/d/1ZgC8FlfyqXXJUYJB4B0fWvPxOGQoMTOnoC2bXnTdhao/pubhtml');
// https://docs.google.com/spreadsheets/d/1ZgC8FlfyqXXJUYJB4B0fWvPxOGQoMTOnoC2bXnTdhao/pubhtml
});

// Pull data from Google spreadsheet
// And push to our pullDataFromTabletop function
function initializeTabletopObject(dataSpreadsheet){
  Tabletop.init({
    key: dataSpreadsheet,
    callback: pullDataFromTabletop,
    debug: false
  });
}


// This function gets our data from our spreadsheet
function pullDataFromTabletop(tabletopData, tabletop) {
  // console.log(tabletop.key);
  // console.log(tabletopData);
  dataTabletop = tabletopData;
  // Go through our Google spreadsheet
  // Stored in tabletopData variable
  // tabletopData = Worksheet
  for (num in tabletopData) {
    console.log(num);
    context["body"].push(tabletopData[num]);
  }
  // If you want to see what context looks like:
   console.log(context);


  // Load templates
  loadTemplates();
};


template = Handlebars.compile($("#sections-template").html());



function loadTemplates() {
  var context_length = context.body[0].elements.length;
  var random_entry = Math.floor((Math.random() * context_length) +1);
    $("#content").html(template(context.body[0].elements[random_entry]));
};

// function showExample () {
//  $("#example-chunk").removeClass("hidden");
// };

// function showDef() {
//  $("#def-chunk").removeClass("hidden");
// };

function showExample() {
  $("#example-chunk").toggle();
}

function showDef() {
  $("#def-chunk").toggle();
};