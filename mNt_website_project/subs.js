function validate(){
    if (!validateName()){
        return
    }else if (!validateEmail()){
        return
    }else if (!validatePhone()){
        return
    }else if (!validateCountry()){
        return
    }else if (!validateTnc()){
        return
    }else{
        alert("Hi " + document.getElementById('input_name').value + ", Thanks for subscribing!")
    }
}

function validateName(){
    var name = document.getElementById('input_name').value
    if(name.length < 3){
        document.getElementById('error1').innerText='Your name must more than 3 characters'
        // alert("Your name must more than 3 characters")
        return false
    }
    document.getElementById('error1').innerText=""
    return true   
}

function validateEmail(){
    var email = document.getElementById('input_email').value
    if (!email.endsWith('.com')){
        document.getElementById('error2').innerText='Email must end with ".com"'
        return false
    }
    document.getElementById('error2').innerText=""
    return true   
}

function validatePhone(){
    var email = document.getElementById('input_phone').value
    if (!email.startsWith('0')){
        document.getElementById('error3').innerText='Your Phone Number must start with "0"'
        return false
    }
    document.getElementById('error3').innerText=""
    return true   
}

function validateCountry(){
    var country = document.getElementById('input_country').value
    if (country==""){
        document.getElementById('error4').innerText='Country must be choosed'
        return false
    }
    document.getElementById('error4').innerText=""
    return true   
}

function validateTnc(){
    var tnc = document.getElementById('input_tnc').checked
    if(tnc == false){
        document.getElementById('error5').innerText='you must agree with the terms and condition'
        return false
    }
    document.getElementById('error5').innerText=""
    return true   
}