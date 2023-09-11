const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("user joined", ({ nickname, room }) => {
    socket.join(room);

    socket.to(room).emit("chat message", {
      message: `${nickname} has joined the room`,
      room: room,
    });
  });

  socket.on("chat message", ({ message, nickname, room }) => {
    io.to(room).emit("chat message", { message, nickname, room });
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
