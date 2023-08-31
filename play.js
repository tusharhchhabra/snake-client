const { connect } = require("./client");

console.log("Connecting ...");
const conn = connect();

conn.on("connect", () => {
  console.log("Connected.");
});

conn.on("data", (message) => {
  console.log(message);
});