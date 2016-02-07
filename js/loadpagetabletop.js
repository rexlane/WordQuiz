var context = {
  "body": []
};

$( document ).ready(function() {
  var spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1ZgC8FlfyqXXJUYJB4B0fWvPxOGQoMTOnoC2bXnTdhao/pubhtml'
  initializeTabletopObject(spreadsheet_url);
  template = Handlebars.compile($("#sections-template").html());
});

function initializeTabletopObject(dataSpreadsheet){
  Tabletop.init({
    key: dataSpreadsheet,
    callback: pullDataFromTabletop,
    debug: false,
    prettyColumnNames: false
  });
}

function pullDataFromTabletop(data, tabletop) {
  words = data.responses.elements
  for (i in words) {
    context["body"].push(words[i]);
  }
  loadTemplates();
};

function loadTemplates() {
  var context_length = context.body.length;
  var random_index = Math.floor((Math.random() * context_length) +1);
  var random_word = context.body[random_index];
    $("#content").html(template(random_word));
};

function showExample() {
  $("#example-chunk").toggle();
}

function showDef() {
  $("#def-chunk").toggle();
};