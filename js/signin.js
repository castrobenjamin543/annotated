import {savedUser} from "./localStorage.js"

const myForm = document.querySelector("#myForm")

if(localStorage.getItem("user") != null) {
    window.location.href = "home.html"
}

myForm.addEventListener("submit", (e) => {

    e.preventDefault()

    const email = document.querySelector("#email")
    const password = document.querySelector("#password")

    const user = {
        email: email.value,
        password: password.value,
        returnSecureToken: true
    }

    fetch("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAEfLjzzCFhQlncEtJ3HiXNhOFSc-vONV4", {
        method:"POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then(res=>res.json())
    .then(data => {
        if(data.registered) {
            const user = JSON.stringify(data)
            savedUser(user)
            window.location.href = "home.html"
        } else {
            console.log(data.error.message)
            alert(data.error.message)
        }
    })
    .catch(err=>console.log(err))
})