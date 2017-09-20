function getRequest(url, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.send();

    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;

        if (xhr.status !== 200) {
            callback(xhr.status + ': ' + xhr.statusText);
        } else {
            callback(null, JSON.parse(xhr.responseText))
        }
    }
}

function postRequest(url, note, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', url, true)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.send(JSON.stringify(note))

    xhr.onreadystatechange = () => {
        if (xhr.status !== 200) {
            callback(false)
        }
        else {
            callback(true)
        }
    }
}

function deleteRequest(url, id, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('DELETE', `${url}/${id}`, true)
    xhr.send()

    xhr.onreadystatechange = () => {
        if (xhr.status === 200) {
            callback(true)
        }
        else {
            callback(false)
        }
    }
}

export {
    postRequest,
    getRequest,
    deleteRequest
}