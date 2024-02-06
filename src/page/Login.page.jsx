import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonComponent,
  ContainerComponent,
  FormComponent,
} from "../components";
import { Register } from "../service/authenticate.service";

const LoginPage = () => {
  const nav = useNavigate();
  const handleRegister = () => {
    nav("/register");
  };
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInputChange = (e) =>
    // console.log(e.target.name,e.target.value);
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
  };

  return (
    <ContainerComponent>
      <div className="Center">
        <div className=" w-1/3 h-auto ">
          <h2 className="text-center text-3xl font-semibold capitalize font-mono mb-10">
            Login your contact
          </h2>
          <form onSubmit={handleSubmit}>
            <FormComponent
              value={formData.email}
              onChange={handleInputChange}
              name={"email"}
              type={"email"}
              label={"Enter Your Email"}
              placeholder={"eg@gmail.com"}
            />
            <FormComponent
              value={formData.password}
              onChange={handleInputChange}
              name={"password"}
              type={"password"}
              label={"Password"}
            />
            <ButtonComponent type="submit">Login</ButtonComponent>
          </form>
          <p className="mt-5">
            You haven't not account yet. Please{" "}
            <button
              onClick={handleRegister}
              className="text-blue-700 underline"
            >
              Register.
            </button>
          </p>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default LoginPage;
