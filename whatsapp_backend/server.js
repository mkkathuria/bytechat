//importing
//  qOtxfGR96akkHqrF my db password
import express from "express";
import mongoose from "mongoose";
import Room from "./dbMessages.js";
import Pusher from "pusher";
import expressAsyncHandler from "express-async-handler";

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
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
// iski jagah app.use(core()) bhi kr skte hai cors ko install krke npm i cors

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
  const msgCollection = db.collection("rooms");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("a change", change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      console.log(messageDetails , "hello");
      pusher.trigger("messages", "inserted", {
        room: messageDetails.room_name,
        name: messageDetails.messages.name,
        message: messageDetails.messages.message,
        timeStamp: messageDetails.messages.timeStamp,
        received: messageDetails.messages.received,
       
      });
    }
    else if(change.operationType === "update"){
      console.log(`change.updateDescription.updatedField`);
      pusher.trigger("messages", "updated", {
        
       
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
}
);

// ?????

// api routes
app.get(
  "/",
  expressAsyncHandler((req, res) => {
    res.status(200).send("hello world");
  })
);



//working
app.get(
  "/api/allrooms",
  expressAsyncHandler(async (req, res) => {
    const roomss = await Room.find({});
    //console.log(roomss);
    if (roomss) {
      res.send(roomss);
    } else {
      res.status(404).send({ message: "room not found" });
    }
  })
);

//working
app.get(
  "/api/messages/room/:room_id",
  expressAsyncHandler(async (req, res) => {
    //find returns all data(means all messages)
    const room = await Room.findById(req.params.room_id);

    if (room) {
      res.send(room.messages);
    } else {
      res.status(404).send({ message: "room not found" });
    }
  })
);


//working
app.post(
  "/api/messages/new",
  expressAsyncHandler(async (req, res) => {
    const mychatmsg = req.body;

    const room = await Room.findById(mychatmsg.room_id);
    if(room){
      room.messages.push({
        message: mychatmsg.message,
        name: mychatmsg.name,
        timestamp: mychatmsg.timeStamp,
        received: mychatmsg.received});
        room.save();
      res.send(room);
    }else{
      res.status(404).send({ message: "room not found" })
    }
    

    
  })
);

// working
app.post(
  "/api/newroom",
  expressAsyncHandler(async (req, res) => {
    const room = new Room({
      room_name: req.body.name,
    });
    const createdroom = await room.save();
    res.send(createdroom);
  })
);

// listener
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
