import {
    Card,
    CardFooter,
    Image,
} from "@nextui-org/react";

export default function Choice({image, isSelected, text, onClick}) {
    let css = {
        height: "196px",
        width: "350px",
        backgroundImage: `url("${image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderBottomLeftRadius: "0px"
    }

    return (
        <Card
            className="w-[350px] m-4"
            style={{ outline: isSelected ? "solid 5px #dbb537" : "" }}
            onMouseDown={onClick}
        >
            <div style={css}></div>
            <CardFooter>
                <p>{text}</p>
            </CardFooter>
        </Card>
    );
}
