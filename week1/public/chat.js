"use strict";

// Server URL below must point to your server, localhost works for local development/testing
const socket = io("http://localhost:3000");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const inp = document.getElementById("m");
  socket.emit("chat message", inp.value);
  inp.value = "";
});

socket.on("chat message", (msg) => {
  const item = document.createElement("li");
  item.classList.add(
    "py-2",
    "px-3",
    "bg-os-midnight-blue",
    "rounded-lg",
    "text-white",
    "w-fit",
    "m-3"
  );
  item.innerHTML = msg;
  document.getElementById("messages").appendChild(item);
});
