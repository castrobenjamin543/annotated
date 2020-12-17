import {showData} from "./showData.js"
import {getUser, deleted} from "../localStorage.js"

export function get() {
    
    const userJson  = getUser()

    if(userJson != null) {
        
        const {localId,idToken} = userJson

        fetch(`https://auth-bluuweb.firebaseio.com/tareas/${localId}.json/?auth=${idToken}`)
        .then(res=>res.json())
        .then(data => {
            
            console.log(data)
            showData(data)
            
        }).catch(err=>deleted())
        
    } else {
        window.location.href = "signin.html"
    }
}