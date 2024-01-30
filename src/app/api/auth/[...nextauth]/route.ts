import TwitchProvider from "next-auth/providers/twitch";
import NextAuth from "next-auth";
import User from "@/models/user";

let clientId = process.env.TWITCH_CLIENT_ID;
let clientSecret = process.env.TWITCH_CLIENT_SECRET;

clientId = clientId === undefined ? "" : clientId;
clientSecret = clientSecret === undefined ? "" : clientSecret;

const handler = NextAuth({
  providers: [
    TwitchProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "twitch") {
        const { name, image } = user;
        try {
          const res = await fetch("http://localhost:3000/api/user", {
            method: "POST",
            headers: {
              "Content-type": "application:json",
            },
            body: JSON.stringify({
              username: name,
              avatar: image,
            }),
          });

          if (res.ok) {
            return true;
          }
        } catch (error) {
          console.log(error);
        }
      }
      return false;
    },
    async session({ session, user }) {
      if (session === undefined) {
        return session;
      }
      if (session.user === undefined) {
        return session;
      }
      const u = await User.findOne({ username: session.user?.name });
      if (user === null) {
        session.user.voted = false;
      } else {
        session.user.voted = u.voted;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
