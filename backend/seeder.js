const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Products");
const User = require("./models/User");
const products = require("./data/products");

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const seedData = async () => {
  try {
    // clear existing data
    await Product.deleteMany();
    await User.deleteMany();

    // create default admin user
    const createdUser = await User.create({
      name: "Admin user",
      email: "admin@email.com",
      password: "123456789",
      role: "admin",
    });

    // assign default userId to each product
    const userId = createdUser._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: userId };
    });

    // insert products into db
    await Product.insertMany(sampleProducts);
    console.log("Product data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding the data", error);
    prosecc.exit(1);
  }
};
seedData();
