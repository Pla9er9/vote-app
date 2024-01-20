import TwitchProvider from "next-auth/providers/twitch";
import NextAuth from "next-auth"

const handler =  NextAuth({
    providers: [
        TwitchProvider({
            clientId: process.env.TWITCH_CLIENT_ID,
            clientSecret: process.env.TWITCH_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async signIn(profile) {
            console.log(profile)
            return true
        }
    }
})

export {handler as GET, handler as POST}