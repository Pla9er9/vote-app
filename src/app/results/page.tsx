"use client";

import Result from "@/components/Result";

export default function Vote() {
    return (
        <>
            <div className="w-[86%] mt-16 row flex-wrap justify-between">
                <h1
                    className="w-full text-3xl mb-10 align-center"
                    style={{ textIndent: "5px" }}
                >
                    Aktualne wyniki głosowania
                </h1>
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
            </div>
        </>
    );
}
