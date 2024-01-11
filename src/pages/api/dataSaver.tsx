import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const DATABASE_URI = "mongodb+srv://dbuser:Khushi@5422@cluster0.9bvmnjo.mongodb.net/inquirydetails?retryWrites=true&w=majority";
const client = new MongoClient(DATABASE_URI);

interface InquiryData {
  name: string;
  company: string;
  contact: string;
  email: string;
  msg: string;
}

export default async function DataSaver(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // let client: MongoClient | null = null; // Initialize client

    try {
      await client.connect();

      const data: InquiryData = req.body;

      const db = client.db();
      const inquiryCollections = db.collection("inquirydetails");

      const result = await inquiryCollections.insertOne(data);
      console.log(result);

      res.status(201).json({ message: "Successfully sent" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
