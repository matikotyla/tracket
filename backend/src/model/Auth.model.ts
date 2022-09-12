import { objectType } from "nexus";

namespace AuthModel {
  export const Payload = objectType({
    name: "Payload",
    definition(t) {
      t.nonNull.string("token");
    },
  });
}

export default AuthModel;
