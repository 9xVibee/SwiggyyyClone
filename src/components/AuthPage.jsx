/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { X } from "lucide-react";
import Login_logo from "../assets/Login_logo.webp";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUserDetails } from "../utils/store";

const AuthPage = ({
  setIsLogin,
  isLogin,
  setIsAuthCompOpen,
  isAuthCompOpen,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const addUserDetails = useUserDetails((state) => state.addUserDetails);
  const handleSetLogin = (e) => {
    e.preventDefault();
    setIsLogin((prev) => (prev == "login" ? "signup" : "login"));
  };

  const handleSetAuthOpen = () => {
    setIsAuthCompOpen((prev) => !prev);
  };

  const onSubmit = async (data) => {
    toast.success("Login Successfull");

    addUserDetails(data);
    sessionStorage.setItem("user", JSON.stringify(data));
    setIsAuthCompOpen(false);
  };
  return (
    <>
      <div
        className={`overflow-y-scroll p-4 md:p-8 fixed right-0 top-0 z-30 w-full sm:w-[50%] lg:w-[35%] h-screen bg-white transition-all duration-500 ${
          isAuthCompOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <form className="w-full md:w-[85%]" onSubmit={handleSubmit(onSubmit)}>
          <X
            size={"2rem"}
            className="text-gray-500 font-light cursor-pointer"
            onClick={handleSetAuthOpen}
          />
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-semibold capitalize">{isLogin}</h1>
              <p className="text-[0.9rem]">
                or{" "}
                <button
                  className="font-semibold text-[#FC8019]"
                  onClick={handleSetLogin}
                >
                  {isLogin === "login"
                    ? "create an account"
                    : "login to your account"}
                </button>
              </p>
            </div>
            <img src={Login_logo} alt="" className="w-28 h-28" />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            {/* If state is signup then display name input field */}

            <div className="flex flex-col gap-1">
              <input
                type="name"
                className="px-4 py-4 w-full border border-gray-500"
                placeholder="Name"
                {...register("name", {
                  required: "Enter your name",
                })}
              />
              {errors.name && (
                <div className="text-red-600 text-[0.8rem]">
                  {errors.name.message}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <input
                type="email"
                className="px-4 py-4 w-full border border-gray-500"
                placeholder="Email"
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
                    message: "Enter Valid Email",
                  },
                })}
              />
              {errors.email && (
                <div className="text-red-600 text-[0.8rem]">
                  {errors.email.message}
                </div>
              )}
            </div>

            {/* if login then dont check regix else check it */}
            {isLogin === "signup" ? (
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  className="px-4 py-4 w-full border border-gray-500"
                  placeholder="Password"
                  {...register("password", {
                    required: "Enter your password",
                    pattern: {
                      value:
                        /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
                      message:
                        "Password should have atleast 1 small letter, 1 capital, 1 digit and 7 length",
                    },
                  })}
                />
                {errors.password && (
                  <div className="text-red-600 text-[0.8rem]">
                    {errors.password.message}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  className="px-4 py-4 w-full border border-gray-500"
                  placeholder="Password"
                  {...register("passwordl", {
                    required: "Enter your password",
                  })}
                />
                {errors.passwordl && (
                  <div className="text-red-600 text-[0.8rem]">
                    {errors.passwordl.message}
                  </div>
                )}
              </div>
            )}

            {/* Submitting the form */}
            <div className="flex flex-col gap-2 mt-8">
              <button
                disabled={isSubmitting}
                className={`w-full ${
                  isSubmitting ? "bg-[#adadad]" : "bg-[#FC8019]"
                } text-white py-4 font-semibold uppercase text-[0.9rem] rounded-md`}
              >
                {isSubmitting ? "submitting..." : "continue"}
              </button>
              <p className="text-xs">
                By creating an account, I accept the Terms & Conditions &
                Privacy Policy
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthPage;
