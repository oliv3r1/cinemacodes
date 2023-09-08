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
    // Join the specified room
    socket.join(room);

    // Broadcast a system message to the room
    socket.to(room).emit("chat message", {
      message: `${nickname} has joined the room`,
      room: room,
    });
  });

  socket.on("chat message", ({ message, nickname, room }) => {
    // Broadcast the message to the specific room
    io.to(room).emit("chat message", { message, nickname, room });
  });

  // Rest of your code remains the same...
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
