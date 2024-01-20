<<<<<<< HEAD
'use client '
=======
'use client'
>>>>>>> fa55d4f14060674d620a4f072cea3c4d5903a23f

import { Button, Image } from "@nextui-org/react";
import { signIn } from "next-auth/react";

export default function LoginButton(props) {
    const clientId = "0d8mnr8fxzyk5meszygoc85ghbmjma"
    const redirectUrl = "http://localhost:3000/api/auth/callback/twitch"
    const twitchAuthUrl = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671`
    return (
        <Button
            onClick={() => signIn('twitch')}   
            color="secondary"
            variant={props.variant}
            size={props.size}
            radius={props.radius}
            startContent={
                <Image
                    src="/twitch.png"
                    width={"15px"}
                    alt="twitch logo"
                    radius="none"
                />
            }
        >
            {props.text}
        </Button>
    );
}
