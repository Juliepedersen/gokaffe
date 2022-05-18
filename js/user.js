fetch("js/users.json")
    .then(response => response.json())
    .then(json => writeData(json))
    .catch((error) => {console.error("Error:", error)});

function writeData(data){
    data.users.forEach( e => {
        console.log(e.username)
    })
}