import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://renatasilvestr3:almenara158rua@cluster0.zsgcyzm.mongodb.net/DicioTech"
);

let db = mongoose.connection;

export default db;

// adicionar no postiman esse Diciotech
