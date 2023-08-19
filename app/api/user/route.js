import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, email, password } = await request.json();
  console.log("masuk POST User", username, email, password);
  if (!username || !email || !password) {
    return NextResponse.json({ message: "Bad Request" }, { status: 401 });
  } else {
    await connectMongoDB();
    await User.create({ username, email, password });
    return NextResponse.json({ message: "User Created" }, { status: 201 });
  }
}

export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({ users });
}

export async function DELETE(request) {
  const userId = request.nextUrl.searchParams.get("userId");
  await connectMongoDB();
  await User.findByIdAndDelete(userId);
  return NextResponse.json({ message: "User Deleted" }, { status: 200 });
}
