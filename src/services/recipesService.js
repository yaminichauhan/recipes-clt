export const addUser = (user, callbackRecipes) => {
    fetch('http://localhost:8585/api/users/create', {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "access-control-allow-origin": "*"
        },
        "body": JSON.stringify(user),
        "mode": "cors",
    })
        .then(resp => {
            return resp.json()
        })
        .then(response => {
            callbackRecipes();
        })
        .catch(err => {
            console.log(err);
        });
}

export const updateLikes = (likes, originalId) => {
    fetch('http://localhost:8585/api/recipes/updateLikes', {
        "method": "PUT",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "access-control-allow-origin": "*"
        },
        "body": JSON.stringify({ originalId, likes }),
        "mode": "cors",
    })
        .then(resp => {
            console.log('ree update...', resp);
            return resp.json()
        })
        .then(response => {
            console.log("r update likes.........", response);
        })
        .catch(err => {
            console.log(err);
        });
}