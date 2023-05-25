import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import inventoryRouter from "./router/inventoryRouter";

const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://demonode1234@cluster0.81ggwlf.mongodb.net/myDatabase?retryWrites=true&w=majority";
const app = express();
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
   
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (e) {
      console.error
  } finally {
    
    await client.close();
  }
}
run().catch(console.dir);



app.use(express.json());
app.use("/inventory", inventoryRouter);

app.listen(3000, () => {
  console.log("App is running at 3000");
  connectToDb();
});
