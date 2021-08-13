
var mailInput = document.getElementById("mail");
var nameInput = document.getElementById("name");
var domainInput = document.getElementById("domain");

function dividemail() {
    var mailValue = mailInput.value;
   var atIndex = mailValue.indexOf("@");
   nameInput.value=mailValue.slice(0,atIndex);
   domainInput.value=mailValue.slice(atIndex+1)
}