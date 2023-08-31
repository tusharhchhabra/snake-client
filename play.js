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


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");

  stdin.on("data", (data) => handleUserInput(data));

  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
}

setupInput();