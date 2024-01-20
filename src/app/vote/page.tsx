'use client'

import Progres from "@/components/Progres";
import Choice from "@/components/Choice";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function Vote() {
    const [current, setCurrent] = useState(1)
    let all = 25

    return (
        <div className="column w-full">
            <h1 className="mt-8 mb-6 text-4xl">Stream roku</h1>
            <div className="row flex-wrap w-[100%] justify-between">
                <Choice />
                <Choice />
                <Choice />
                <Choice />
                <Choice />
                <Choice />
            </div>
            <div className="row mt-8 justify-between w-[96%]">
                <div className="row">
                    <Button onClick={() => setCurrent(v => v - 1)} color="primary" variant="bordered">
                        Cofinj
                    </Button>
                    <div style={{margin: "0 8px"}} ></div>
                    <Button onClick={() => setCurrent(v => v + 1)} color="primary">
                        Następne
                    </Button>
                </div>
                <Progres current={current} all={all} />
            </div>
        </div>
    )
}
