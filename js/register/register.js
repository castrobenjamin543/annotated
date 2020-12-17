import {addUser} from "./addUser.js"

const formRegister = document.querySelector("#formRegister")

formRegister.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    const user = {
        email,
        password,
        returnSecureToken: true
    }

    addUser(user)
    
})