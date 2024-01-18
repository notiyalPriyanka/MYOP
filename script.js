// owl-carousel
// $(document).ready(function(){
//     $('.owl-carousel').owlCarousel({
//         loop:true,
//         margin:10,
//         responsiveClass:true,
//         responsive:{
//             0:{
//                 items:1,
//                 nav:true
//             },
//             600:{
//                 items:3,
//                 nav:false
//             },
//             1000:{
//                 items:5,
//                 nav:true,
//                 loop:false
//             }
//         }
//     })
// }

// search----



// var x = document.getElementByid("sticky")
// window.addEventListener("scroll",function({
//     if(x.pageYoffset)
// }))

// creat account
// function mySignupForm(){
// var firstname = document.myform.firstname.value;
// var lastname = document.myform.lastname.value;
// var email
// }

// function mySignupForm() {
//     var firstName = document.myForm.firstname.value;
//     var firstName = document.myForm.firstname.value;
//     var lastName = document.myForm.lastname.value;
//     var Email = document.myForm.email.value;
//     var Password = document.myForm.password.value;
//     var error1 = document.getElementById("#error1");
//     var error2 = document.getElementById("#error2");
//     var error3 = document.getElementById("#error3");
//     var error4 = document.getElementById("#error4");
//     var input1 = document.querySelector(".input1");
//     var input2 = document.querySelector(".input2");
//     var input3 = document.querySelector(".input3");
//     var input4 = document.querySelector(".input4");
//     var input5 = document.querySelector(".input5");
//     var atPosition = Email.indexOf('@');
//     var dotPosition = Email.indexOf('.');




//     if (firstName == "" || firstName == "undefined" || firstName == null) {
//         // alert("Name required.")
//         error1.innerHTML = "First name is required."
//         error1.style.display = "block"
//         input1.style.border = "1px solid red"
//         error1.style.color = "red"

//         input1.addEventListener("click", function(){
//             // this.focus();
//             error1.style.display = "none"
//             input1.style.border = "1px solid grey"
//         })
//         return false
//     }
//     // else if (firstName.value >= 1) {
//     //     error1.style.display = "none"
//     //     input1.style.border = "1px solid green"
//     // }

//     // else if (firstName?.length > 0 ||  firstName[0] === firstName[0].toUpperCase()){
//     //     // input1.style.border = "1px solid red"
//     //     // error1.style.display = "none"
//     //     // error1.innerHTML = "First Letter of your name must be capital.";
//     //     // error1.style.display = "block"
//     //     // error1.style.color = "red";
//     //     // return false
//     // }


//     else if (lastName == "" || lastName == "undefined" || lastName == null) {
//         input1.style.border = "1px solid grey"
//         error1.style.display = "none"
//         input2.style.border = "1px solid red"
//         error2.innerHTML = "Last name is required."
//         error2.style.display = "block"
//         error2.style.color = "red"
        
//         input2.addEventListener("click", function(){
//             // this.focus();
//             error2.style.display = "none"
//             input2.style.border = "1px solid grey"
//         })
//         return false
//     }
//     // else if (lastName?.length > 0 ||  lastName[0] === lastName[0].toUpperCase()){
//     //     input1.style.border = "1px solid grey"
//     //     error1.style.display = "none"
//     //     error2.innerHTML = "First Letter of your name must be capital";
//     //     error2.style.display = "block"
//     //     error2.style.color = "red"
//     //     return false
//     // }

//     else if (Email == "") {
//         input2.style.border = "1px solid grey"
//         input3.style.border = "1px solid red"
//         error3.innerHTML = "Email name is required."
//         error3.style.display = "block"
//         error3.style.color = "red"
//         input3.addEventListener("click", function(){
//             // this.focus();
//             error3.style.display = "none"
//             input3.style.border = "1px solid grey"
//         })
//         return false
//     }
    
    
//     else if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= Email.length) {
//         error3.innerHTML = "Enter a valid a email.";
//         error3.style.display = "block";
//         error3.style.color = "red";
//         input3.style.border = "1px solid red"
//         // alert("Enter a valid email")
//         return false
//     }


// // Password

// else if(  Password == "" || Password== "undefined" || Password == null){
//     input1.style.border = "1px solid grey"
//     error1.style.display = "none"
//     error4.innerHTML = "Password is required";
//     error4.style.display = "block"
//     input4.style.border = "1px solid red"
//     error4.style.color = "red"       
// }
// else if(  Password !=  /^[A-Za-z]\w{0,12}$/ ){
//     input1.style.border = "1px solid grey"
//     error1.style.display = "none"
//     error4.innerHTML = "Password must be contain special charactor and number";
//     input4.style.border = "1px solid red"
//     error4.style.display = "block"
//     error4.style.color = "red"       
// }
// }


// var searchinput = document.getElementById("searchInput");
// var icon = document.getElementById("searchIcon")
// icon.addEventListener("click", function(){
//     if(searchinput.style.display == "none"){
//         // searchinput.style.display = "block" 
//         alert("clicked if")
//     }
//     else{
//         // searchinput.style.display == "none" ;

//     }
// })

function displaySearch(){
    let pathname = window.location.pathname;
    let path = pathname.substring(1);
    localStorage.setItem("path",path)
    window.location.href = "/searchp.html"
    
}
function closeSearch(){
    let path = localStorage.getItem("path")
    // alert("clicked:"+path)
    window.location.href=  path; 
}