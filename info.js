function formValidation() {
    clearErrors();

    var result = validateFirstname();
    result = validateLastname() && result;
    result = validatePassword() && result;
    result = validateUsername() && result;

    return result;
}

function validateFirstname() {
    var nameMessageRules = "<p> - Must start with a capital and only alphabet allowed</p>";
  
    var stringName = document.querySelector("#firstname").value;
    stringName = stringName.trim();
    var stringLength = stringName.length;

    if (stringLength == 0) {
        showErrors("<p>The name field can not be left empty or just blank characters " + nameMessageRules + "</p>");
        return false;
    }
    
    if(!((stringName[0] > 64) &&  (stringName[0] < 91))) {
        showErrors("<p>" + nameMessageRules + "</p>");
        return false;
    }

    var countNonAlpha = 0;
    stringName = stringName.toUpperCase();            
  
    for (var i = 0; i < stringLength; i++) {
      if (!((stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91))) {  // A=65  .....  Z=90 - upper case range
        countNonAlpha++;
        break;
      }
    } 
  
    if (countNonAlpha) {
      showErrors("<p>Only alphabetic characters are allowed for the name " + nameMessageRules + "</p>");
      return false;
    }

    return true; 
}

function validateLastname() {
    var nameMessageRules = "<p> - Must start with a capital and only alphabet allowed</p>";
  
    var stringName = document.querySelector("#lastname").value;
    stringName = stringName.trim();
    var stringLength = stringName.length;

    if (stringLength == 0) {
        showErrors("<p>The name field can not be left empty or just blank characters " + nameMessageRules + "</p>");
        return false;
    }
    
    if(!((stringName[0] > 64) &&  (stringName[0] < 91))) {
        showErrors("<p>" + nameMessageRules + "</p>");
        return false;
    }

    var countNonAlpha = 0;
    stringName = stringName.toUpperCase();            
  
    for (var i = 0; i < stringLength; i++) {
      if (!((stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91))) {  // A=65  .....  Z=90 - upper case range
        countNonAlpha++;
        break;
      }
    } 
  
    if (countNonAlpha) {
      showErrors("<p>Only alphabetic characters are allowed for the name " + nameMessageRules + "</p>");
      return false;
    }

    return true; 
} 

function validatePassWord(){
    var nameMessageRules = "<p> - Please enter 6 characters</p>";
  
    var stringPassword = document.querySelector("#password").value;
    stringPassword = stringPassword.trim();
    var stringLength = stringPassword.length;

    if (stringLength == 0) {
        showErrors("<p>The name field can not be left empty or just blank characters " + nameMessageRules + "</p>");
        return false;
    }

     if (stringLength != 6) {
        showErrors("<p>You did not enter enough charcaters for the name " + nameMessageRules + "</p>");
        return false;
    }

    var countNum = 0;
    for (var i = 0; i < stringLength; i++) {
        if(!(isNaN(stringName[i]))){
            countNum++;
        }
    }

    if(countNum == 0){
        showErrors("<p>Must have at least 1 digit" + nameMessageRules + "</p>");
      return false;
    }

    return true;
}

function validateUsername() {

    var nameMessageRules = "<p> - Please enter 6 alphabetic characters</p>";
  
    var stringName = document.querySelector("#username").value;
    stringName = stringName.trim();
    var stringLength = stringName.length;
  
    if (stringLength == 0) {
      showErrors("<p>The name field can not be left empty or just blank characters " + nameMessageRules + "</p>");
      return false;
    }
  
    if (stringLength != 6) {
      showErrors("<p>You did not enter enough charcaters for the name " + nameMessageRules + "</p>");
      return false;
    }
  
    var countNonAlpha = 0;
    stringName = stringName.toUpperCase();            
  
    for (var i = 0; i < stringLength; i++) {
      if (!((stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91))) {  // A=65  .....  Z=90 - upper case range
        countNonAlpha++;
        break;
      }
    } 
  
    if (countNonAlpha) {
      showErrors("<p>Only alphabetic characters are allowed for the name " + nameMessageRules + "</p>");
      return false;
    }
  
    return true;
  
  }

function showErrors(messages) {

    document.querySelector('#errors').innerHTML += messages;
  
  } 

function clearErrors() {
    document.querySelector('#errors').innerHTML = "";
    document.querySelector('#client').focus();
  }
