import TwitchProvider from "next-auth/providers/twitch";
import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        TwitchProvider({
            clientId: process.env.TWITCH_CLIENT_ID,
            clientSecret: process.env.TWITCH_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === 'twitch') {
                const { name, image } = user
                try {
                    const res = await fetch('http://localhost:3000/api/user', {
                        method: "POST",
                        headers: {
                            "Content-type": "application:json"
                        },
                        body: JSON.stringify({
                            username: name,
                            avatar: image
                        })
                    })

                    if (res.ok) {
                        return user;
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            return user
        }
    }
})

export { handler as GET, handler as POST }