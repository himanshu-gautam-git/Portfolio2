//Typewriter effect
var i = 0;
var fname = 'Himanshu Gautam';
window.onload = function nameAnimated() {
  if (i < fname.length) {
    document.getElementById("myname").innerHTML += fname.charAt(i);
    i++;
    setTimeout(nameAnimated, 150);
  }
}

//Function to implement form validation and DOM manipulation which is connected with submit button of form in contact.html
var n = 1;
//function to check number
function isNumber(number)
{
  if(isNaN(number))
    return false;
  else
    true;
    return true;
}
function myFunction() {
  var table = document.getElementById("mytable");
  var row1 = table.insertRow();
  var name = document.getElementById("iname").value;
  var sname = document.getElementById("lname").value;
  var dob = document.getElementById("dob").value;
  var tel = document.getElementById("tel").value;
  var email = document.getElementById("email").value;
  var color = document.getElementById("color").value;
  var comm = document.getElementById("comm").value;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (name != "" && name != null && name != undefined && sname != "" && sname != null && sname != undefined && dob != "" && dob != null && dob != undefined && tel != "" && tel != null && tel != undefined && email != "" && email != null && email != undefined && color != "" && color != null && color != undefined && comm != "" && comm != null && comm != undefined && isNumber(tel) && tel.length == 10 && email.match(validRegex)) {
    var cell0 = row1.insertCell();
    var cell1 = row1.insertCell();
    var cell2 = row1.insertCell();
    var cell3 = row1.insertCell();
    var cell4 = row1.insertCell();
    var cell5 = row1.insertCell();
    var cell6 = row1.insertCell();
    cell0.innerHTML = n;
    cell1.innerHTML = name + " " + sname;
    cell2.innerHTML = dob;
    cell3.innerHTML = tel;
    cell4.innerHTML = email;
    cell5.innerHTML = color;
    cell6.innerHTML = comm;
    n++;
    alert("Heyy! " + name + ", your response have been recorded.We will contact you shortly.");
  }
  else {
    alert("Please fill all the required fields in appropriate pattern.");
  }
} 
