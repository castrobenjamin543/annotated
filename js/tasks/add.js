import {getUser} from "../localStorage.js"
import {get} from "./get.js"

export const addTask = (task) => {
    const userJson  = getUser()
    var {localId,idToken} = userJson

    fetch(`https://auth-bluuweb.firebaseio.com/tareas/${localId}.json?auth=${idToken}`, {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-type":"application/json"
        }
    })
    .then(res=>res.json())
    .then(data => {
        console.log(data)
        formTask.reset()
        get()
    })
    .catch(err => console.log(err))
}