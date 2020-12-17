import {get} from "./get.js"

export function deleteTask(id) {
    const userLocal = localStorage.getItem("user")
    const userJson = JSON.parse(userLocal)
    var {localId,idToken} = userJson

    fetch(`https://auth-bluuweb.firebaseio.com/tareas/${localId}/${id}.json?auth=${idToken}`, {
        method: "DELETE",
        headers: {
            "Content-type":"application/json"
        }
    })
    .then(res=>res.json())
    .then(data => {
        console.log(data)
        get()
    })
    .catch(err => console.log(err))


}