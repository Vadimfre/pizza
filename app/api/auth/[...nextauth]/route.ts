import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from "@/prisma/prisma-client";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const values = {
          email: credentials.email,
        };

        const finUser = await prisma.user.findFirst({
          where: values,
        });
        if (!finUser) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password,
          finUser.password
        );

        if (!isPasswordValid) {
          return null;
        }

        if (!finUser.verified) {
          return null;
        }

        return {
          id: String(finUser.id),

          email: finUser.email,
          name: finUser.fullName,
          role: finUser.role,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token }) {
      const findUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (findUser) {
        token.id = String(findUser.id);
        token.email = findUser.email;
        token.fullName = findUser.fullName;
        token.role = findUser.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
