import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Image,
} from "@nextui-org/react";
import LoginButton from "./LoginButton";
import Link from "next/link";

export default function Navbar_() {
    return (
        <Navbar maxWidth="2xl" isBordered={true}>
            <NavbarItem>
                <Link href="/">
                    <Image
                        src="logo.webp"
                        alt="logo"
                        width={"75px"}
                    />
                </Link>
            </NavbarItem>
            <NavbarBrand>
                <h1 className="font-bold text-xl" >Edycja <span className="font-extralight">2023</span></h1>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <LoginButton variant="ghost" size="sm" radius="sm" text="Zaloguj z twitch" />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
