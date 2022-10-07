import { enumType } from "nexus";
import { ColorConstant } from "@constant";

export default enumType({
  name: "Color",
  members: ColorConstant.Colors,
});
