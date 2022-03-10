const express = require("express");
const cors = require("cors");

const webRouter = require("./routers/WebRouter");
const userRouter = require("./routers/UserRouter");

const server = express();
server.use(express.json());
server.use(cors());

server.get("/", (request, response) => {
  response.send("<h3>Server Running .... </h3>");
});

server.use("/api/web", webRouter);
server.use("/api/user", userRouter);

server.listen(8989, () => {
  console.log("Server Running : http://localhost:8989");
});
