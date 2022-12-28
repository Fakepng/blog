import NextAuth, { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

import DiscordProvider from "next-auth/providers/discord";

export const authOptions: AuthOptions = {
  // callbacks: {
  //   session({ session, token, user }) {
  //     return session;
  //   },
  // },
  adapter: PrismaAdapter(prisma),
  // pages: {
  //   signIn: "/auth/signin",
  //   signOut: "/auth/signout",
  //   error: "/auth/error",
  // },
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  secret: process.env.secret,
};

export default NextAuth(authOptions);
