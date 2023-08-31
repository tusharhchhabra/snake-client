const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected to the game server.");
    conn.write("Name: TUS");
  
    // conn.write("Move: up");
  });
  
  conn.on("data", (message) => {
    console.log(message);
  });

  return conn;
};

module.exports = { connect };