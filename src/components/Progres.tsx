import { Progress } from "@nextui-org/react";

export interface Props extends React.HTMLProps<HTMLDivElement> {
  all: number;
  current: number;
}

export default function Progres(props: Props) {
  const x = 100 / props.all;
  return (
    <div className="flex flex-col items-center ml-auto">
      <p className="text-base mb-1">
        {props.current} / {props.all}
      </p>
      <Progress
        size="sm"
        className="w-80"
        value={props.current * x}
        color="primary"
      />
    </div>
  );
}
