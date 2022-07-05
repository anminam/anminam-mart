import React, { useState } from "react";
import { useForm, FieldErrors } from "react-hook-form";

interface ILoginFrom {
  name: string;
  email: string;
  password: string;
}

const LoginForm = () => {
  const [isPass, setIsPass] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFrom>({});

  const onValid = (data: ILoginFrom) => {
    console.log(data);
    setIsPass(true);
  };

  const onInvalid = (error: FieldErrors) => {
    console.log(error);
    setIsPass(false);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <div>
        <label>Name:</label>
        <input
          {...register("name", { required: "please write down your name" })}
          type="text"
        />
        <div>{errors?.name?.message}</div>
      </div>
      <div>
        <label>Email:</label>
        <input
          {...register("email", {
            required: "please write down your email",
            validate: {
              notNaver: (value) =>
                !value.includes("@naver.com") || "only @naver emails allowed",
            },
          })}
          type="email"
          placeholder="only @naver.com"
        />
        <div>{errors?.email?.message}</div>
      </div>
      <div>
        <label>password:</label>
        <input
          {...register("password", {
            required: "please write down your password",
            minLength: {
              value: 10,
              message: "Password has to be more than 10 characters",
            },
          })}
          type="password"
          placeholder="Min 10 characters"
        />
        <div>{errors?.password?.message}</div>
      </div>
      <button type="submit">Log in</button>
      {isPass && <div>Thank you</div>}
    </form>
  );
};

export default LoginForm;
