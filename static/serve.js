async function add_user() {
    let username = document.getElementById("in").value;
    let added = await fetch("/addUser/" + username);
    let added_json = await added.json();
    console.log(added_json);
}

async function ready_up() {
    let ready = false;
    while (!ready) {
        let ready_status = await fetch("/getReadyStatus");
        let ready_status_json = await ready_status.json();
        console.log("checking status")
        if (ready_status_json == "ready") {
            ready = true;
        } else if (ready_status_json == "not ready") {
            await delay(1000)
        }
        
    }
}

function delay(time_ms) {
    return new Promise(resolve => setTimeout(resolve, time_ms));
}