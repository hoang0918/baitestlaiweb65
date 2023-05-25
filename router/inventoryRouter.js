import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const inventoryRouter = express.Router();

inventoryRouter.get("/inventory", (req, res) =>{
    MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          const dbo = db.db("mydatabase");
          dbo.collection("inventory").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
          });
        });
});

inventoryRouter.put("/inventury/quality", (req, res) =>{
    const { low } = req.query;
    if (low === 'true') {
      
      const lowQuantityItems = inventory.filter(item => item.instock < 100);
      return res.json(lowQuantityItems);
    }
    return res.json(inventory);
});

export default inventoryRouter;
