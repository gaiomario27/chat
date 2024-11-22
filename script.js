// login

const login = document.querySelector(".login")
const loginForm = login.querySelector(".login--form")
const loginInput = login.querySelector(".login--input")

const colors = [
    "blue",
    "darkred",
    "green",
    "gold"
]

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const user = {id:"", name: "", color: ""}

const handleSubmit = (event) => {
    event.proventDefault()
    
    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = getRandomColor()

    login.style.display = "none"

    console.log(user)
}

loginForm.addEventListener("submit", (handleSubmit) )