import React, { useState } from "react";
import axios from "axios";
import Button from "../components/ui/buttonui/Button";
import Input from "../components/ui/inputui/Input";
import Label from "../components/ui/labelui/Label";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";


const LoginForm1 = () => {

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
              type="email"
              placeholder="Enter email"
            />

            <Label text='Password'>Password</Label>
            <Input
              type="password"
              placeholder="Enter password"
            />
            <a href="#" className="text-blue-600 underline flex justify-end mb-2 text-sm">
              Forgot Password
            </a>

            <Button
              type="submit"
              
              text='Login'
              color="teal"
            >
              
            </Button>
            

            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 underline">
                Register
              </a>
            </p>
            <p className="flex justify-center p-8">OR</p>
           <div className="flex justify-center gap-4 text-xl">
 <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-800 cursor-pointer">
        <FaGoogle className="text-white text-xl" />
      </div>           
 <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-800 cursor-pointer">
        <FaFacebook className="text-white text-xl" />
      </div>
 <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-800 cursor-pointer">
        <FaTwitter className="text-white text-xl" />
      </div>
                 </div>

            
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm1;
