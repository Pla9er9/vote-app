"use client";

import Result from "@/components/Result";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Vote() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/results')
            .then((res) => res.json())
            .catch(() => {
                alert("Wystąpił błąd podczas danych, odśwież lub spróbuj poźniej")
            })
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return <Spinner color="secondary" className="mt-[350px]"/>
    }
    return (
        <>
            <div className="w-[86%] mt-16 row flex-wrap justify-center">
                <h1
                    className="w-full text-3xl mb-10 align-center"
                    style={{ textIndent: "5px" }}
                >
                    Aktualne wyniki głosowania
                </h1>
                {data.map(e => 
                    <Result data={e} />
                )}
            </div>
        </>
    );
}
