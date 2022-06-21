import React, { useState } from "react";

export default function Forms() {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formErrors, setFormErrors] = useState("");
  const [emailError, setEmailError] = useState("");

  const onUserNameChanged = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setUserName(value);
  };
  const onEmailChanged = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setEmailError("");
    setEmail(value);
  };
  const onPasswordChanged = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setPassword(value);
  };

  console.log(userName, email, password);

  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userName === "" || email === "" || password === "") {
      setFormErrors("All fileds are require");
    }
    if (!email.includes("@")) {
      setEmailError("email is required");
    }
    console.log(email, userName, password);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={userName}
        onChange={onUserNameChanged}
        type="text"
        placeholder="Username"
        // required
        // minLength={5}
      />
      <input
        value={email}
        onChange={onEmailChanged}
        type="email"
        placeholder="Email"
        // required
      />
      {emailError}
      <input
        value={password}
        onChange={onPasswordChanged}
        type="password"
        placeholder="Password"
        // required
      />
      <input type="submit" value="create Account" />
    </form>
  );
}
