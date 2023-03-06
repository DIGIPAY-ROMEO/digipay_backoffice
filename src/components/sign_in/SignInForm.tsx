/* eslint-disable @typescript-eslint/no-misused-promises */
import Router from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type SignInFormValues from "~/lib/@types/sign_in/SignInFormValues";
import signInFormResolver from "~/lib/resolver/signInFormResolver";
import ForgotPassword from "./ForgotPassword";

const resolver = signInFormResolver;

export default function SignInForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({ resolver });

  const [rememeberMe, setRememberMe] = useState<boolean>(false);

  const rememberMeToggle = () => setRememberMe((currentVal) => !currentVal);

  const onSubmit = handleSubmit((data) => {
    void Router.push("/admin/dashboard");
    alert(JSON.stringify(data));
  });

  return (
    <form
      className="w-100 flex flex-col space-y-3 rounded-lg bg-white p-5 shadow-md"
      onSubmit={onSubmit}
    >
      <input
        {...register("email")}
        className="input w-full"
        placeholder="yourdigipay@email.com"
      />
      {errors?.email && (
        <small className="px-2 text-xs text-error">
          {errors.email.message}
        </small>
      )}

      <input
        {...register("password")}
        type="password"
        className="input w-full"
        placeholder="******"
      />
      {errors?.password && (
        <small className="px-2 text-xs text-error">
          {errors.password.message}
        </small>
      )}

      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Remember me?</span>
          <input
            type="checkbox"
            className="toggle-primary toggle"
            onChange={rememberMeToggle}
            checked={rememeberMe}
          />
        </label>
      </div>

      <button type="submit" className="btn-primary btn text-white">
        SIGN IN
      </button>

      <ForgotPassword />
    </form>
  );
}
