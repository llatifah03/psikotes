import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { userId } = params;
  const { newEmail: email, newPassword: password } = await request.json();
  await connectMongoDB();
  await User.findByIdAndUpdate(userId, { email, password });
  return NextResponse.json({ message: "User Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { userId } = params;
  await connectMongoDB();
  const users = await User.findOne({ _id: userId });
  return NextResponse.json({ users }, { status: 200 });
}
