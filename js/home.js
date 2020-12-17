import {get} from "./tasks/get.js"
import {addTask} from "./tasks/add.js"
import {deleteTask} from "./tasks/delete.js"
import {deleted} from "./localStorage.js"


// Get tasks
get()



// Delete task
const listHtml = document.querySelector("#list")

listHtml.addEventListener("click", e => {
    console.log(e.target.id)
    deleteTask(e.target.id)
})



//add task

const formTask = document.querySelector("#formTask")

formTask.addEventListener("submit", (e) => {
    e.preventDefault()

    const title = document.querySelector("#title")
    const description = document.querySelector("#description")

    const task = {
        nombre: title.value,
        descripcion: description.value
    }

    addTask(task)

})

const closedSesion = document.querySelector("#closedSesion")

closedSesion.addEventListener("click", () => {
    deleted()
})