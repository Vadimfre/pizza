import NextAuth from "next-auth";
import { authOptions } from "@/shared/constants/prodiders";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
