export const addUser = (user) => {
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAEfLjzzCFhQlncEtJ3HiXNhOFSc-vONV4", {

                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type":"application/json"
                }

            })
            .then(res=>res.json())
            .then(data => {
                console.log(data)
                if(data.localId) {
                    const user = JSON.stringify(data)
                    localStorage.setItem("user", user)
                    window.location.href = "home.html"
                }
            })
}