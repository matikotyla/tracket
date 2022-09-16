import { FieldErrors } from "react-hook-form";

namespace ErrorUtils {
  export const isErrorsEmpty = (errors: FieldErrors): boolean => {
    console.log(errors);
    return Object.keys(errors).length === 0;
  };
}

export default ErrorUtils;
