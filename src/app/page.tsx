"use client";

import LoginButton from "@/components/LoginButton";
import ResultButton from "@/components/ResultButton";
import { Button, Image, useUser } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const session = useSession();
  console.log(session.data);
  return (
    <>
      <div className="flex flex-col max-w-2xl pt-28 mr-16">
        <h1 className="font-black text-9xl mb-28 leading-none">
          Nagrody Coroczne <br />{" "}
          <span className="text-purple-800">twitch.tv</span>
        </h1>
        <div className="flex justify-center w-max ml-6">
          <ResultButton />
          {session.status === "authenticated" ? (
            <>
              {session.data.user?.voted === false ? (
                <Button
                  as={Link}
                  href="/vote"
                  size="lg"
                  radius="full"
                  color="success"
                  variant="flat"
                  className="w-[275px]"
                  startContent={
                    <Image src="vote.svg" width="22px" alt="Ikona głosowania" />
                  }
                >
                  Weź udział w głosowaniu
                </Button>
              ) : (
                <Button
                  size="lg"
                  radius="full"
                  variant="faded"
                  color="success"
                  className="w-[275px]"
                  disabled
                >
                  Już zagłosowałeś
                </Button>
              )}
            </>
          ) : (
            <LoginButton
              size="lg"
              variant="solid"
              radius="full"
              text="Zaloguj się aby zagłosować"
            />
          )}
        </div>
      </div>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/4168/4168977.png"
        className="ml-16"
        alt="Ikona nagrody"
        width="350px"
      />
    </>
  );
}
