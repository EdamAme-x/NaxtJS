async function getAlive() {
    let alive = await fetch("./_alive", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    alive = await alive.json()

    return alive.id
}

getAlive()
    .then(res => JSON.parse(res))
    .then(data => {
        window.naxt_alive = data
    })

setInterval(() => {
    getAlive()
        .then(res => JSON.parse(res))
        .then(data => {
            if (data !== window.naxt_alive) {
                window.location.reload()
            }
        })
}, 500)