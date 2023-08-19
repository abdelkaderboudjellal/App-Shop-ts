import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { Users } from "@/types/types";
type Repo = {
  users: Users[];
};
export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Username:",
          type: "email",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        const res = await fetch("https://products-jtax.onrender.com/user");
        const users = await res.json();
        if (!credentials || !credentials.email || !credentials.password)
          return null;
        const user = users.find(
          (item: Users) => item.email === credentials.email
        );
        if (user?.password === credentials.password) {
          return user;
        }
        return null;

        /* if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        } */
      },
    }),
  ],
  pages: {
    signIn: "/login",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  secret: process.env.NEXTAUTH_SECRET,
};
