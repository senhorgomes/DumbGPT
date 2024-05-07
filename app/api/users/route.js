import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";
export async function GET(request) { 
  console.log(process.env.MONGO_URL)
  const client = new MongoClient(process.env.MONGO_URL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  await client.connect();
    // Send a ping to confirm a successful connection
    const database = await client.db("users")
    const collection = await database.collection("users")
    const doc = await collection.findOne({"name":"Joe Montana"})
  return NextResponse.json({ message: doc }, { status: 200 }); 
};