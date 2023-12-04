import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import axios from "axios";

const Login = () => {
  const { user, login, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((data) => {
        if (data.user) {
          toast.success("User Login Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate("/");
        }
        console.log(data.user);
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googleLogin()
      .then((data) => {
        const userInfo = {
          email: data?.user.email,
          name: data?.user?.displayName,
          role: "user",
        };
        axios
          .post(
            "https://building-managment-system-server.mahbubulalam2.repl.co/api/v1/create-user",
            userInfo
          )
          .then((res) => {
            console.log(res.data);
            toast.success("User Login Successfully", {
              position: toast.POSITION.TOP_CENTER,
            });
            navigate("/");
          })
          .catch((err) => console.error(err));
        if (data.user) {
        }
        console.log(data.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-5">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p onClick={handleGoogleLogin} className="btn ">
              <FcGoogle className="text-2xl" />{" "}
              <span className="">Google Login</span>
            </p>
            <p className="">
              if you have no account. Please{" "}
              <Link className="text-primary underline" to="/signup">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login