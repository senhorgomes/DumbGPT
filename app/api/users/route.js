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
    await client.db("admin").command({ ping: 1 });
  return NextResponse.json({ message: "Hello from Next.js" }, { status: 200 }); 
};