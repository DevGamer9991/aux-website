const express = require("express")
const { createServer } = require("http")
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    io.emit("test", "Hi")
})

app.get("/api", function (req, res) {
    res.send("Test")
})

httpServer.listen(8080)