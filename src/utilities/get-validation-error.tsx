import { TypeWithKey } from "../models/type-with-key";

export const getValidatorError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_BAD_REQUEST: "Se rompió la red",
  };
  return codeMatcher[errorCode];
};
