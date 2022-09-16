import { FieldErrors } from "react-hook-form";

namespace ErrorUtils {
  export const isErrorsEmpty = (errors: FieldErrors): boolean =>
    Object.keys(errors).length === 0;
}

export default ErrorUtils;
