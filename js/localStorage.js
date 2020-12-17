const savedUser = (user) => {
    localStorage.setItem("user", user)
}

const getUser = () => {
    const userLocal = localStorage.getItem("user")
    const userJson = JSON.parse(userLocal)
    return userJson
}

const deleted = () => {
    localStorage.removeItem("user")
    window.location.href = "index.html"
}

export {savedUser, getUser, deleted}