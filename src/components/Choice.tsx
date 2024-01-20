import {
    Card,
    CardFooter,
    Image,
} from "@nextui-org/react";
import { useState } from "react";

export default function Choice() {
    const [isSelected, setSelected] = useState(false);
    return (
        <Card
            className="w-[350px] my-4"
            style={{ outline: isSelected ? "solid 3px #dbb537" : "" }}
            onMouseDown={() => {
                setSelected((s) => (s = !s))
                console.log(isSelected)
            }}
        >
            <Image
                src="https://i.ytimg.com/vi/LIbf1FPYCGY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBZ-oRjA5TqmWWwvkHzOhvDsUy0lA"
                alt=""
                style={{ borderBottomLeftRadius: "0px" }}
            />
            <CardFooter>
                <p>Walka z żabami</p>
            </CardFooter>
        </Card>
    );
}
