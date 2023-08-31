const net = require("net");
const { IP, PORT } = require("./constants")

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected to the game server.");
    conn.write("Name: TUS");
  });
  
  conn.on("data", (message) => {
    console.log(message);
  });

  return conn;
};

module.exports = { connect };