import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const { user, signup, updateUser } = useAuth();
  const IMAGEBB_API = "918613f4ce8f567723f80cb3e079b7cc";
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    let image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    await axios
      .post(`https://api.imgbb.com/1/upload?key=${IMAGEBB_API}`, formData)
      .then((data) => {
        //    console.log(data.data.data.display_url);
        image = data.data.data.display_url;
      })
      .catch((err) => console.error(err));
    const user = { email, name, image, role: "user" };

    // console.log(user);
    // console.log(email, password);
    signup(email, password)
      .then((data) => {
        if (data.user) {
          // console.log(data.user, image);
          updateUser(name, image)
            .then(() => {
              axios
                .post("http://localhost:8080/api/v1/create-user", user)
                .then((res) => {
                  if (res.data.insertedId) {
                    navigate("/dashboard");
                    toast.success("Signup Successfully");
                  }
                })
                .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
        }
      })
      .catch((err) => console.error(err));
  };

  // console.log(user);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-5">Signup !</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
            </div>
            <input required type="file" name="image" className="mt-2" />
            <div className="form-control mt-6">
              <button className="btn btn-primary">Signup</button>
            </div>
            <p className="">
              if you have no account. Please{" "}
              <Link className="text-primary underline" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
