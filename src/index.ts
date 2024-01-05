import express from "express";

run();

function run() {
  const app = express();

  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });
}
