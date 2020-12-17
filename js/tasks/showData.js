
export function showData(data) {


    const listHtml = document.querySelector("#list")

    if(data!=null) {

        const keys = Object.keys(data)
        listHtml.innerHTML = ""
        keys.forEach(key=> {
            console.log(data[key])
            listHtml.innerHTML += `
                <li>
                    <h2>${data[key].nombre}</h2>
                    <p>${data[key].descripcion}</p>
                    <button id="${key}">Delete</button>
                </li>
            `
        })

    } else {
        listHtml.innerHTML = "no hay tareas agrega una"
    }

    
    
    
}