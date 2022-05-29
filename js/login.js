const username = document.querySelector("#username")
const password = document.querySelector("#password")

const users = [
    {
        username: "admin",
        password: "admin"
    },
    {
        username: "eaaa",
        password: "eaaa"
    }
]

function login(event) {
    const myUsername = username.value
    const myPassword = password.value
    const url = "error.html";
    let errorMsg = ""
    event.preventDefault()
    // Validare om vores input felter er tomme
    if(username != null && password != null) {
        // laver en ReGeX af vores brugernavn der ikke er case sensitiv
        const condition = new RegExp(myUsername, "i")
        // Vi søger så i vores "users" liste om der er et match med det indtastet brugernavn
        const result = users.filter((element) => condition.test(element.username))
        // laver resultatet om til en variabel
        const myUser = result[0]
        // Checker om vores brugernavn eksistere
        if (myUser != undefined) {
            // Checker om det indtastet password matcher det brugernavnet har
            if(myUser.password === myPassword){
                sessionStorage.setItem("username", myUsername)
                window.location.href = url
            } else{
                errorMsg = "Password matcher ikke dit brugernavn"
                document.querySelector("#password + .error-msg").textContent = errorMsg
                document.querySelector("#username + .error-msg").textContent = null
            }
        } else{
            errorMsg = "Dette brugernavn findes ikke"
            document.querySelector("#username + .error-msg").textContent = errorMsg
            document.querySelector("#password + .error-msg").textContent = null
        }
    }
}
document.querySelector("#login-form").addEventListener("submit", login)