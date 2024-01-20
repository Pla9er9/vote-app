import LoginButton from "@/components/LoginButton";
import ResultButton from "@/components/ResultButton";
import { Image } from "@nextui-org/react";
import { cookies } from 'next/headers'

export default function Home() {
    // const token = getTokenFromUrl()
    const token = undefined
    if (token != undefined) {
        const cookieStore = cookies()
        cookieStore.set("access_token", token)
        document.location.reload()
    }

    return (
        <>
            <div className="flex flex-col max-w-2xl pt-28 mr-16">
                <h1 className="font-black text-9xl mb-28 leading-none">
                    Nagrody Coroczne <br />{" "}
                    <span className="text-purple-800">twitch.tv</span>
                </h1>
                <div className="flex justify-center w-max ml-6">
                    <ResultButton />
                    <LoginButton
                        size="lg"
                        variant="solid"
                        radius="full"
                        text="Zaloguj się aby zagłosować"
                    />
                </div>
            </div>
            <Image src="https://cdn-icons-png.flaticon.com/512/4168/4168977.png" className="ml-16" alt="Ikona nagrody" width="350px" />
        </>
    );
}
