import React, { useState } from "react";
import axios from "axios";
import Button from "../components/ui/buttonui/Button";
import Input from "../components/ui/inputui/Input";
import Label from "../components/ui/labelui/Label";

const LoginForm1 = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend.healthflo.in/user/login",
        { emailId, password }
      );

      if (response.data.status === 1) {
        localStorage.setItem("jwt", response.data.jwt);
        alert("Login Successful");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.log("Error during Login:", error);
      alert("Login Failed");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-l from-teal-600 via-teal-500 to-white p-4">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
          
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 bg-teal-600 flex flex-col items-center justify-center p-6 space-y-4">
  <h2 className="text-white text-4xl font-bold">Welcome Back!</h2>
  <p className="text-white text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repudiandae praesentium veritatis perspiciatis. Quaerat ipsum dolores, consequatur beatae, nisi voluptates laborum porro animi magnam aperiam distinctio sunt rerum libero sequi!</p>
  {/* <p className="text-white text-lg">Manage your profile and settings</p>
  <p className="text-white text-lg">Stay connected with our services</p> */}
</div>

          {/* Right Form Section */}
          <form
            className="w-full md:w-1/2 flex flex-col p-8"
            
          >
            <h1 className="text-2xl flex justify-center font-bold text-gray-900 mb-6">Login</h1>

            <Label text='Email'></Label>
            <Input
              onChange={(e) => setEmailId(e.target.value)}
              type="email"
              placeholder="Enter email"
              value={emailId}
            />

            <Label text='Password'>Password</Label>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              value={password}
            />
            <a href="#" className="text-blue-600 underline flex justify-end mb-2 text-sm">
              Forgot Password
            </a>

            <Button
              type="submit"
              
              text='Login'
              color="teal"
              onClick={handleSubmit}
            >
              
            </Button>
            

            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 underline">
                Register
              </a>
            </p>

            
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm1;
