import connectMongoDB from "@/lib/mongodb";
import { verifyPassword, createToken } from "@/lib/helper";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
  console.log("masuk POST User", email, password);
  if (!email || !password) {
    return NextResponse.json({}, { status: 401, statusText: "Bad Request" });
  } else {
    await connectMongoDB();
    const user = await User.findOne({ email });
    // console.log("findOne user", user);
    if (user) {
      if (verifyPassword(password, user.password)) {
        console.log("masuk if verifyPassword");
        let access_token = createToken({
          id: user._id,
          email: user.email,
        });
        return NextResponse.json(
          { status: 200, token: access_token }, // CSR status 200
          { status: 200 } // SSR => status ok
        );
      } else {
        console.log("masuk else password wrong!");
        return NextResponse.json(
          {
            status: 400,
            message:
              "Maaf, nama pengguna atau kata sandi yang Anda masukkan salah. Silakan coba lagi.",
          },
          {
            status: 400,
            statusText:
              "Maaf, nama pengguna atau kata sandi yang Anda masukkan salah. Silakan coba lagi.",
          }
        );
      }
    } else {
      return NextResponse.json(
        {
          status: 400,
          statusText:
            "Maaf, nama pengguna atau kata sandi yang Anda masukkan salah. Silakan coba lagi.",
        },
        {
          status: 400,
          statusText:
            "Maaf, nama pengguna atau kata sandi yang Anda masukkan salah. Silakan coba lagi.",
        }
      );
    }
  }
}
