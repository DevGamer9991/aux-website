const express = require("express")
const { createServer, Server } = require("http")
const { server } = require("socket.io");

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer);

io.on("connection", (socket) => {

})

app.get("/api", function (req, res) {
    res.send("Test")
})

httpServer.listen(8080)