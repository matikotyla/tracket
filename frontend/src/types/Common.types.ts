import { SVGProps } from "react";

namespace CommonTypes {
  export enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
    Yellow = "yellow",
  }

  export type Icon = (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export default CommonTypes;
