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

module.exports = { setupInput }