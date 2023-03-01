import { useState } from 'react'
import { useForm } from 'react-hook-form'
import SignInFormValues from '~/lib/@types/sign_in/SignInFormValues'
import signInFormResolver from '~/lib/resolver/signInFormResolver'

const resolver = signInFormResolver

export default function SignInForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({ resolver })

  const [rememeberMe, setRememberMe] = useState<boolean>(false)
  const rememberMeToggle = () => setRememberMe((currentVal) => !currentVal)

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form
      className="flex flex-col w-100 bg-white shadow-md rounded-lg p-5 space-y-3"
      onSubmit={onSubmit}
    >
      <input
        {...register('email')}
        className="input w-full"
        placeholder="yourdigipay@email.com"
      />
      {errors?.email && <p className="text-error">{errors.email.message}</p>}

      <input
        {...register('password')}
        type="password"
        className="input w-full"
        placeholder="******"
      />
      {errors?.password && (
        <p className="text-error">{errors.password.message}</p>
      )}

      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            onChange={rememberMeToggle}
            checked={rememeberMe}
          />
        </label>
      </div>

      <button type="submit" className="btn btn-primary text-white">
        SIGN IN
      </button>
    </form>
  )
}
