import { ContactTypes } from "types";

namespace ContactData {
  export const offices: ContactTypes.Office[] = [
    {
      name: "Los Angeles",
      street: "4556 Brendan Ferry",
      city: "Los Angeles, CA 90210",
    },
    {
      name: "New York",
      street: "886 Walter Streets",
      city: "New York, NY 12345",
    },
    {
      name: "Toronto",
      street: "7363 Cynthia Pass",
      city: "Toronto, ON N3Y 4H8",
    },
    {
      name: "London",
      street: "114 Cobble Lane",
      city: "London N1 2EF",
    },
  ];
}

export default ContactData;
