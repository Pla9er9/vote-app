"use client";

import Progres from "@/components/Progres";
import Choice from "@/components/Choice";
import { Button, Card, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Vote() {
  const session = useSession();
  let router = useRouter();
  if (session.status === "unauthenticated") {
    router.replace("/");
  }

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [current, setCurrent] = useState(1);
  const [selected, setSelected] = useState<undefined[]>([]);
  const [error, setError] = useState("");

  let all = 5;

  useEffect(() => {
    fetch("/api/vote")
      .then((res) => res.json())
      .catch(() => {
        alert("Wystąpił błąd podczas danych, odśwież lub spróbuj poźniej");
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        let arr = [];
        for (let i = 0; i < data.length - 1; i++) {
          arr.push(undefined);
        }
        setSelected(arr);
      });
  }, []);

  function next() {
    if (current === 5) {
      return;
    }
    setCurrent((v) => v + 1);
  }

  function before() {
    if (current === 1) {
      return;
    }
    setCurrent((v) => v - 1);
  }

  async function submit() {
    console.log("LOL");
    if (selected.includes(undefined)) {
      return;
    }
    const res = await fetch("/api/vote", {
      method: "post",
      body: JSON.stringify(selected),
      credentials: "include",
    });
    console.log(res.status);
    if (res.ok) {
      await router.replace("/");
    } else {
      setError(
        "Error while voting - " + res.status + " - " + (await res.text()),
      );
    }
  }

  const loading = [];
  for (let i = 0; i < 5; i++) {
    loading.push(i);
  }

  if (isLoading) {
    return (
      <div className="row w-full flex-wrap justify-center mt-16 ">
        {loading.map(e => (
          <Card className="w-[350px] h-[240px] m-4 space-y-5 p-4" radius="lg" key={"card-" + e} >
            <Skeleton className="rounded-lg">
              <div className="h-48 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="column w-full min-h-[700px]">
      <h1 className="mt-8 mb-6 text-4xl">{data[current - 1].title}</h1>
      <div className="row flex-wrap w-[100%] justify-center">
        {data[current - 1].answers.map((e) => (
          <Choice
            key={"choice-" + e.title}
            text={e.title}
            image={e.imageUrl}
            isSelected={selected[current - 1] === e.index}
            onClick={() => {
              let items: number[];
              items = [...selected];
              items[current - 1] = e.index;
              setSelected(items);
            }}
          />
        ))}
      </div>
      <div className="row mt-auto justify-between w-[96%]">
        <div className="row">
          <Button
            onClick={before}
            color="primary"
            variant="bordered"
            disabled={current === 1}
          >
            Cofinj
          </Button>
          <div style={{ margin: "0 8px" }}></div>
          {current === 5 ? (
            <Button onClick={submit} color="success" variant="ghost">
              Wyślij
            </Button>
          ) : (
            <Button onClick={next} color="primary">
              Następne
            </Button>
          )}
        </div>
        <p className="mx-auto text-red-500">{error}</p>
        <Progres current={current} all={all} />
      </div>
    </div>
  );
}
