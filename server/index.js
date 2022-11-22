import fetch from 'node-fetch';

function webhook() {

    const webhookURL = 'https://chat.googleapis.com/v1/spaces/AAAATS6Nn9E/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=_dYKJJT8d0DKUu7d8vghAz9dGKLxCdBQT_SRwQVRFiA%3D';

    const data = JSON.stringify({
        'text': 'Hello from a Node script!',
    });
    let resp;
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: data,
    }).then((response) => {
        resp = response;
        console.log(response);
    });
    return resp;
}

// [END hangouts_chat_node_webhook]

webhook();
