import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { isValidEmailFormat } from "~/lib/utilities";

export default function ForgotPassword(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setEmail(e.currentTarget.value);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);

  const handleSubmit = () => {
    alert(email);
  };

  useEffect(() => {
    if (isValidEmailFormat({ email: email })) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [email]);

  return (
    <div className="flex flex-col items-center justify-center py-3">
      <label htmlFor="my-modal-3" role={"button"}>
        Forgot Password?
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn-primary btn-sm btn-circle btn absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Forgot Password</h3>
          <p className="py-4">{`Please enter your email below and we will send you an instruction on how to reset your password.`}</p>

          <div className="input-group">
            <input
              className="input w-full bg-slate-200"
              placeholder="yourdigipay@email.com"
              onChange={handleOnChange}
            />
            <button
              disabled={isSubmitDisabled}
              onClick={handleSubmit}
              type="button"
              className="btn-primary btn-square btn"
            >
              <IoSend color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
