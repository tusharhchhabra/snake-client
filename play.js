const { connect } = require("./client");

console.log("Connecting ...");
const conn = connect();

conn.on("connect", () => {
  console.log("Connected to the game server.");

  conn.write("Name: TUS");

  // conn.write("Move: up");
});

conn.on("data", (message) => {
  console.log(message);
});
