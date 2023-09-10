export { default } from "next-auth/middleware";
// fungsi untuk page yg butuh auth,
export const config = {
  matcher: ["/dashboard/:path*"],
};
