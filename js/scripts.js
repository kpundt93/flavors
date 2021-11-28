$(document).ready(function() {
  $("#favorites").submit(function(event) {
    event.preventDefault();
    const flavor = $("input#flavor").val();

    let flavors = [];
    flavors.forEach(function(element) {
      flavors.push(element);
    });
    console.log(flavor)
    console.log(flavors);

    $("ul").append("<li>" + flavor + "</li>");
  });
});