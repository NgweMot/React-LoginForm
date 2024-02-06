import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonComponent,
  ContainerComponent,
  FormComponent,
} from "../components";
import { Register } from "../service/authenticate.service";

const RegisterPage = () => {
  const nav = useNavigate();
  const handleLogin = () => {
    nav("/");
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    // console.log(formData);
    const res= await Register(formData);
    console.log(res);

  };
  return (
    <ContainerComponent>
      <div className="Center">
        <div className="w-1/3 h-auto">
          <h1 className="text-center text-3xl font-semibold capitalize font-mono mb-10">
            Register Your Account
          </h1>
          <form onSubmit={handleSubmit}>
            <FormComponent
              onChange={handleInputChange}
              value={formData.name}
              label="Enter Your Name"
              type="text"
              name="name"
            />
            <FormComponent
              onChange={handleInputChange}
              value={formData.email}
              label={"Enter Your Email"}
              type={"email"}
              placeholder="eg@gmail.com"
              name={"email"}
            />
            <FormComponent
              onChange={handleInputChange}
              value={formData.password}
              label={"Password"}
              type={"password"}
              name={"password"}
            />
            <FormComponent
              onChange={handleInputChange}
              value={formData.password_confirmation}
              label={"Confirm Your Password"}
              type={"password"}
              name={"password_confirmation"}
            />
            <ButtonComponent type={"submit"}>Register</ButtonComponent>
          </form>
          <p className="mt-5">
            You have registered. Please{" "}
            <button onClick={handleLogin} className="text-blue-700 underline">
              Login.
            </button>
          </p>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default RegisterPage;
