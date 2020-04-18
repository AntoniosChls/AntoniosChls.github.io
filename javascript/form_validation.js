// Name field check
function testName() {
    var text = document.getElementById("Name").value;
    var pattern = /^[a-zA-Z]+$/;
    var checkString = pattern.test(text);
    //tests if the field is correct
    if (checkString == true && text.length > 2) {
        document.getElementById("NameError").innerHTML = ""
    }
    //tests if the field is not filled
    else if (text == "") {
        document.getElementById("NameError").innerHTML = "Please fill the field"
    }
    //Error message
    else {
        document.getElementById("NameError").innerHTML = "Invalid Name"
    }
}
// Last Name field check
function testLastName() {
    var text = document.getElementById("LastName").value;
    var pattern = /^[a-zA-Z]+$/;
    var checkString = pattern.test(text);
    //tests if the field is correct
    if (checkString == true && text.length > 2) {
        document.getElementById("LastNameError").innerHTML = ""
    }
    //tests if the field is not filled
    else if (text == "") {
        document.getElementById("LastNameError").innerHTML = "Please fill the field"
    }
    //Error message
    else {
        document.getElementById("LastNameError").innerHTML = "Invalid Last Name"
    }
}
//Email field check
function testEmail() {
    var text = document.getElementById("Email").value;
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var checkString = pattern.test(text);
    //tests if the field is correct
    if (checkString == true) {
        document.getElementById("EmailError").innerHTML = ""
    } else if (text == "") {
        document.getElementById("EmailError").innerHTML = "Please fill the field"
    }
    //Error message 
    else {
        document.getElementById("EmailError").innerHTML = "Invalid Email"
    }
}

//Phone field check
function testPhone() {
    var text = document.getElementById("Phone").value;
    var pattern = /^[0-9]+$/;
    var checkString = pattern.test(text);
    if (checkString == true && text.length == 10) {
        document.getElementById("PhoneError").innerHTML = ""
        //Tests if the field is not filled
    } else if (text == "") {
        document.getElementById("PhoneError").innerHTML = "Please fill the field"
    }
    //Error message
    else {
        document.getElementById("PhoneError").innerHTML = "Invalid Phone"
    }
}
//Subject field check
function testSubject(){
    var text = document.getElementById("Subject").value;
    if (text == "") {
        document.getElementById("SubjectError").innerHTML = "Please fill the field"
    }
    else {
        document.getElementById("SubjectError").innerHTML = ""
    }
}
//Message field check
function testMessage(){
    var text = document.getElementById("Message").value;
    if (text == "") {
        document.getElementById("MessageError").innerHTML = "Please fill the field"
    }
    else {
        document.getElementById("MessageError").innerHTML = ""
    }
}

function clearFunction(){
    document.getElementById("NameError").innerHTML = ""
    document.getElementById("EmailError").innerHTML = ""
    document.getElementById("SubjectError").innerHTML = ""
    document.getElementById("MessageError").innerHTML = ""
}
