import connectMongoDB from "@/lib/mongodb";
import Psikotes from "@/models/psikotes";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const psikotes = await Psikotes.find();
  return NextResponse.json({ psikotes });
}
