// $(document).ready(function () {
//     $('#myNav').load('nav.html');
// });

// w3.includeHTML();



function displayContact() 
{
    let name = document.getElementById("enterName").value;
    let phone = document.getElementById("enterPhoneNumber").value;
    let email = document.getElementById("enterEmail").value;
    let studentGrade = document.getElementById("studentGrade").value;
    
    
    document.getElementById("formClass").innerHTML = 
    "<div>" +

    "<div>" +
    "Name: " + name + 
    "\n\n" + 
    "</div>" +

    "<div>" +
    "Phone: \n" + phone +
    "\n\n" +
    "</div>" +

    "<div>" +
    "Email: \n" + email +
    "\n\n" +
    "</div>" +

    "<div>" +
    "Student Grade: \n" + studentGrade +
    "</div>" +
    
    "</div>";
}