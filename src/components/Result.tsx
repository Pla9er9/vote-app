import { Card, CardHeader, Image } from "@nextui-org/react";

export default function Result() {
    const paragraph = {
        fontSize: "12px",
        color: "#0070F0",
        margin: "5px 0 5px 15px",
    };

    const percent = {
        fontSize: "9px",
        color: "#fff",
        marginRight: "15px",
    };

    const items = [];
    for (let i = 0; i < 6; i++) {
        items.push(
            <div className="row justify-between">
                <p style={paragraph}>
                    <span style={{ color: "#d1d7e0", marginRight: "8px" }}>
                        {i + 1}.
                    </span>{" "}
                    Walka z żabami
                </p>
                <p style={percent}>40%</p>
            </div>
        );
    }

    return (
        <Card
            className="w-[300px] my-4 py-2"
            style={{
                background:
                    "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(73,118,196,0.08) 100%)",
                border: "solid 1px #ffffff15",
            }}
        >
            <CardHeader>
                <div className="row">
                    <Image
                        src="https://api.iconify.design/material-symbols-light:rewarded-ads-outline-rounded.svg?color=%23888888"
                        alt="ikona nagrody"
                        width="20px"
                    />
                    <p style={{ marginLeft: "5px" }}>Stream roku</p>
                </div>
            </CardHeader>
            {items}
        </Card>
    );
}
