module.exports = function (config, env) {
  config.externals = {
    react: "window.React",
    "react-dom": "window.ReactDOM",
  };
  return config;
};
