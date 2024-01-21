'use client'

import { Button, Image } from "@nextui-org/react";
import { signIn } from "next-auth/react";

export default function LoginButton(props) {
    return (
        <Button
            onClick={(e) => signIn('twitch')}   
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
