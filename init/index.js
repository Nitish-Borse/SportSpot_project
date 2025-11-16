const mongoose = require("mongoose");
const initData = require("./data.js");
const SportItem = require("../models/sport_Item.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/SportItemsRental";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await SportItem.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,owner:"68f206054e772ed23e5d1416",
  }));
  await SportItem.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();