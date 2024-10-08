import Stripe from "stripe";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import createStripeRoutes from "./routes/stripe.js";
import schoolInfoRoutes from "./routes/schoolInfo.js";
import excelUploadRoutes from "./routes/excelUpload.js";
import geolookupRoutes from "./routes/geoLookup.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);
const stripeRoutes = createStripeRoutes(stripe);

const corsOptions = {
  origin: ["https://crescendoforacause.com", "http://localhost:5173"],
  optionsSuccessStatus: 200,
  credentials: true,
  methods: ["POST", "GET", "PUT", "DELETE"],
};

const uri = `mongodb+srv://jjkjon21:${process.env.MONGO_DATABASE_PASSWORD}@crescendowebsite.ssxyrz4.mongodb.net/?retryWrites=true&w=majority&appName=CrescendoWebsite`;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}

connect();

app.use(cors(corsOptions));
app.use(express.json());
app.use(stripeRoutes);
app.use("/api", schoolInfoRoutes);
app.use("/upload", excelUploadRoutes);
app.use("/api", geolookupRoutes);

app.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
