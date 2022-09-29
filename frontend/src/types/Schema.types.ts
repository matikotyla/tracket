namespace SchemaTypes {
  export type AnyType = "any.required" | "any.invalid" | "any.only";
  export type StringType =
    | "string.base"
    | "string.empty"
    | "string.email"
    | "string.min"
    | "string.max"
    | "string.alphanum"
    | "string.length";
  export type BooleanType = "boolean.base";
  export type PasswordType =
    | "password.minOfNumeric"
    | "password.minOfSpecialCharacters"
    | "password.minOfUppercase"
    | "password.minOfLowercase"
    | "password.noWhiteSpaces";
  export type ObjectType = "object.base";

  export type Type =
    | AnyType
    | StringType
    | BooleanType
    | PasswordType
    | ObjectType;

  export type Message = {
    [_ in Type]?: string;
  };
}

export default SchemaTypes;
