var createUserAccountSocket =
  require("./app/controller/users/create").createUserAccountSocket;

exports.socketAll = async function (io) {
  try {
    io.on("connection", (socket) => {
      console.log("user connection", socket.id);

      socket.on("login", async function (data) {
        console.log(data);
        let obj = {
          name: data,
          socketId: socket.id,
        };
        let createAcc = await createUserAccountSocket(data);
        await io.emit("getLogin", obj);
      });
      socket.on("newMessage", async function (data) {
        console.log(socket.id);
        let obj = {
          text: data,
          time: new Date(),
          socketId: socket.id,
        };
        await io.emit("getMessage", obj);
      });

      socket.on("disconnect", () => {
        console.log("user disconnected ", socket.id);
      });
    });
  } catch (e) {
    console.log("\n\n", e);
  }
};
