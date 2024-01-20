import {Progress} from "@nextui-org/react";

export default function Progres(props) {
    const x = 100 / props.all
    return (
        <div className="flex flex-col items-center ml-auto">
            <p className="text-base mb-1">{props.current} / {props.all}</p>
            <Progress size="sm" className="w-80" value={props.current * x} color="primary" />
        </div>
    )
}