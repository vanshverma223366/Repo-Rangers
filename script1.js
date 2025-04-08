document.addEventListener("DOMContentLoaded", function() {
  
    const form = document.querySelector("#signinForm");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    const correctEmail = "vansh@gmail.com";
    const correctPassword = "123456";

    form.addEventListener("submit", function(event) {

        if (email.value !== correctEmail || password.value !== correctPassword) {
            alert("Incorrect email or password. Please try again.");
            event.preventDefault(); 
        }
    });
});
