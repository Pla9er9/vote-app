import { Button, Image } from "@nextui-org/react";
import Link from "next/link";

export default function ResultButton() {
    return (
        <Button as={Link} className="mr-6" href="/results" color="primary" variant="ghost" size="lg" radius="full">
            Sprawdź wyniki
        </Button>
    );
}
