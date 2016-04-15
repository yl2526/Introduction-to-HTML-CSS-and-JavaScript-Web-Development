var worker;

function startWorker() {
    worker = new Worker("js_worker_start.js");
    worker.onmessage = function(event) {
        document.getElementById("output").innerHTML += '<li>' + event.data + '</li>';
    };
}

function stopWorker() {
    worker.terminate();
}