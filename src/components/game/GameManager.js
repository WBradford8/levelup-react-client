export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createGame = (game) => {
    return fetch("http://localhost:8000/games", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "content-type": "application/JSON"
        },
        body: JSON.stringify(game)
     })
}

export const getGameTypes = () => {
    return fetch("http://localhost:8000/gametypes", { 
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then()
}
