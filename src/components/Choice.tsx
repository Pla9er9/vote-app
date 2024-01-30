import { Card, CardFooter } from "@nextui-org/react";

export interface Props extends React.HTMLProps<HTMLDivElement> {
  image: string;
  isSelected: boolean;
  text: string;
  onClick: () => void;
}

export default function Choice(props: Props) {
  let css = {
    height: "196px",
    width: "350px",
    backgroundImage: `url("${props.image}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderBottomLeftRadius: "0px",
  };

  return (
    <Card
      className="w-[350px] m-4"
      style={{ outline: props.isSelected ? "solid 5px #dbb537" : "" }}
      onMouseDown={props.onClick}
    >
      <div style={css}></div>
      <CardFooter>
        <p>{props.text}</p>
      </CardFooter>
    </Card>
  );
}
