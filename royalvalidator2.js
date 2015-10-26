// royalvalidator2.js
//   An example of input validation using the change and submit 
//   events, using the DOM 2 event model
//   Note: This document does not work with IE8

// ********************************************************** //
// The event handler function for the name text box

function chkName(event) {

// Get the target node of the event

  var myName = event.currentTarget;

// Test the format of the input name 
//  Allow the spaces after the commas to be optional
//  Allow the period after the initial to be optional

var pos = myName.value.search(/^([A-Z]|[a-z]){1,}$/);

  if (pos != 0) {
    alert("The name you entered (" + myName.value + 
          ") is not in the correct form. \n" +
          "The correct form is: " +
          "All letters either capitalized or not capitalized with no numbers \n");
    myName.focus();
    myName.select();
  } 
}

// ********************************************************** //
// The event handler function for the phone number text box and postal code

function chkNumber(event) {

// Get the target node of the event

  var myPhone = event.currentTarget;

// Test the format of the input phone number
 
  var pos = myPhone.value.search(/^[0-9]{1,}$/);
 
  if (pos != 0) {
    alert("The phone number you entered is not in numerals \n");
    myPhone.focus();
    myPhone.select();
  } 
}

// ********************************************************** //
// The event handler function for the duration indicated for booking

function chkaddress(event) {

// Get the target node of the event

  var myaddress = event.currentTarget;

// Test the format of the input phone number
 
  var pos = myaddress.value.search(/^[\w]{1,}$/);
 
  if (pos != 0) {
    alert("Please enter an address. Do not leave more than one blank \n");
    myaddress.focus();
    myaddress.select();
  } 
}

