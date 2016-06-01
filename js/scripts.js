var fullName = function(firstName, lastName) {
  return firstName + lastName;
};

var customersAddress = function(streetAddress, zipCode, state) {
  return streetAddress + " " + zipCode + ", " + state;
};

// var thankYou = function()

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var resultName = fullName(firstName, lastName);
    var streetAddress = $("#streetAddress").val();
    var zipCode = $("#zipCode").val();
    var state = $("#state").val();
    var resultAddress = customersAddress(streetAddress, zipCode, state);
    $("#output").text("Thank you for your order, " + firstName + "." + "We will deliver it to " + resultAddress);
  });
});
