import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const DATABASE_URI = "mongodb+srv://second_user:ChzflVc2kQLyoZKO@cluster0.z4r3to1.mongodb.net/inquiry_details?retryWrites=true&w=majority";

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
    let client: MongoClient | null = null; // Initialize client

    try {
      const data: InquiryData = req.body;

      client = new MongoClient(DATABASE_URI);
      await client.connect();

      const db = client.db();
      const inquiryCollections = db.collection("inquiry_details");

      const result = await inquiryCollections.insertOne(data);
      console.log(result);

      res.status(201).json({ message: "Successfully sent" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    } finally {
      if (client) {
        client.close(); // Close client connection if it was successfully established
      }
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
