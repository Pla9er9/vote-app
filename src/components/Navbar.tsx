"use client";

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Image,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownItem,
    DropdownMenu,
    Avatar,
} from "@nextui-org/react";
import LoginButton from "./LoginButton";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar_() {
    const { status, data: session } = useSession();
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
                {status === "authenticated" ? (
                    <>
                        <NavbarItem>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Avatar size="sm" src={session.user?.image} style={{cursor: "pointer"}} />
                                </DropdownTrigger>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => signOut()} key="delete" className="text-danger" color="danger">
                                        Wyloguj
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavbarItem>
                    </>
                ) : (
                    <NavbarItem>
                        <LoginButton variant="ghost" size="sm" radius="sm" text="Zaloguj z twitch" />
                    </NavbarItem>
                )}
            </NavbarContent>
        </Navbar>
    );
}
