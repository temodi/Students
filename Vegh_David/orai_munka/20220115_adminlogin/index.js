window.addEventListener("load", () => {

    const invalid = document.querySelector(".invalid");
    const button = document.querySelector(".adminbutton");
    
    button.addEventListener("click", () => {
        if(document.querySelector("#username").value !== "admin" && document.querySelector("#password").value !== "password"){
            invalid.innerText = "Invalid username or password!";
            invalid.height = "18px";
        }else{
            location.href = "admin.html"
        }
    })

})