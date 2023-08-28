import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
mongoose.connect('mongodb://localhost:27017/fullstack_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database connected'))

app.use(cors());
app.use(express.json());

app.listen(5001, ()=>console.log("Server up and running..."))