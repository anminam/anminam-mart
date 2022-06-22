import { appendErrors, FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}
export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      email: "M",
    },
    mode: "onChange",
  });
  const onValid = (data: LoginForm) => {
    console.log("valid");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "유저이름 적어라",
          minLength: {
            message: "다섯글자 이상적으셈",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: "이메일적어라",
          validate: {
            notGmail: (value) => !value.includes("@gmail.com") || "지멜 안됨",
          },
        })}
        type="email"
        placeholder="Email"
        className={`outline-none ${
          Boolean(errors.email?.message) ? "border-red-500" : ""
        }`}
      />
      {errors.email?.message}
      <input
        {...register("password", { required: "비밀번호적어라" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="create Account" />
    </form>
  );
}
