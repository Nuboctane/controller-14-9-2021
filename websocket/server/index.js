const WebSocket = require("ws");

const wss = new WebSocket.Server({ port:8083 });

wss.on("connection", ws => {
    console.log("con");

    ws.on("message", data => {
        console.log(data);

        ws.send(data);
    });

    ws.on("close", ()  => {
        console.log("clo");
    });
})

