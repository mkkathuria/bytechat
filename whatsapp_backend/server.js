//importing
//  qOtxfGR96akkHqrF my db password
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";

// app config
const app = express();
const port = process.env.PORT || 8000;

const pusher = new Pusher({
  appId: "1210654",
  key: "7e1c9fc88e785ac03390",
  secret: "cac538b8ffda5a1d1a15",
  cluster: "ap2",
  useTLS: true,
});

// middlewares
app.use(express.json());

// DB config
const connection_url =
  "mongodb+srv://mukul:qOtxfGR96akkHqrF@cluster0.lmn61.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("My Database Connected");
  const msgCollection = db.collection("mychatmessages");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("a change",change);
  });
});

// ?????

// api routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/api/messages/sync", (req, res) => {
  //find returns all data(means all messages)
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err); //internal server error
    } else {
      res.status(200).send(data); //created
    }
  });
});

app.post("/api/messages/new", (req, res) => {
  const mychatmsg = req.body;

  Messages.create(mychatmsg, (err, data) => {
    if (err) {
      res.status(500).send(err); //internal server error
    } else {
      res.status(201).send(data); //created
    }
  });
});

// listener
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
