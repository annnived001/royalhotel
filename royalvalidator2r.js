// validator2r.js
//   The last part of validator2. Registers the 
//   event handlers
//   Note: This script does not work with IE8

// Get the DOM addresses of the elements and register 
//  the event handlers

      var firstnameNode = document.getElementById("firstname");
	  var lastnameNode = document.getElementById("lastname");
	  var addressNode = document.getElementById("address");
	  var postalcodeNode = document.getElementById("postalcode");
	  var contactnumberNode = document.getElementById("contactnumber");
	  // var emailNode = document.getElementById("email");
	 
	  
	  
      firstnameNode.addEventListener("change", chkName, false);
	  lastnameNode.addEventListener("change", chkName, false);
	  addressNode.addEventListener("change", chkaddress, false);
	  postalcodeNode.addEventListener("change", chkNumber, false);
      contactnumberNode.addEventListener("change", chkNumber, false);
	  emailNode.addEventListener("change", chkemail, false); */
      
	  
