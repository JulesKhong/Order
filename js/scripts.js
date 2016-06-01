var fullName = function(firstName, lastName) {
  return firstName + lastName;
};

var customersAddress = function(streetAddress, zipCode, state) {
  return streetAddress + zipCode + state;
};

// var thankYou = function()

$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var resultName = fullName(firstName, lastName);
    $("#output").text(resultName);
  });
// });

// $(document).ready(function() {
  $("form#address").submit(function(event) {
    event.preventDefault();
    var streetAddress = $("#streetAddress").val();
    var zipCode = $("#zipCode").val();
    var state = $("#state").val();
    var resultAddress= customersAddress(streetAddress, zipCode, state);
    $("#output").text(resultAddress);
  });
});
