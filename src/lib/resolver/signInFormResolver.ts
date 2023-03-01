import { Resolver } from "react-hook-form";
import SignInFormValues from "../@types/sign_in/SignInFormValues";

const signInFormResolver: Resolver<SignInFormValues> = async (values) => {
  return {
    values: values.email && values.password ? values : {},
    errors:
      values.email.length === 0
        ? {
            email: {
              type: "required",
              message: "This field is required.",
            },
          }
        : values.password.length === 0
        ? {
            password: {
              type: "required",
              message: "This field is required.",
            },
          }
        : {},
  };
};

export default signInFormResolver;
