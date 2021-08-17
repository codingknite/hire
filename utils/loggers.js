const logInfo = (...params) => {
  console.log(...params);
};

const logError = (...params) => {
  console.error(...params);
};

module.exports = { logInfo, logError };
