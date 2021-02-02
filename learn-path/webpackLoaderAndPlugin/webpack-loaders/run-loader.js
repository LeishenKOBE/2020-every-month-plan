const { runLoaders } = require("loader-runner");
const fs = require("fs");
const path = require("path");

runLoaders(
  {
    resource: path.join(__dirname, "./src/txt/无题.txt"),
    loaders: [
      {
        loader: path.join(__dirname, "./src/raw-loader.js"),
        options: {
          name: "许嵩",
        },
      },
    ],
    context: {
      minimize: true,
    },
    readResource: fs.readFile.bind(fs),
  },
  (err, res) => {
    err ? console.error(err) : console.log(res);
  }
);
