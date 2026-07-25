import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../shared/auth-context/auth-context";
import store from "../../core/shared/redux-store/redux-store";
type LoginFormValues = {
  name: string;
  password: string;
};

function LoginForm() {
  const navigate = useNavigate();
  const authContext = useContext(UserContext);
  if (!authContext) {
    throw new Error("AuthContext must be provided");
  }
  const { login } = authContext;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.name,
          password: data.password,
        }),
      });

      const result = await response.json();

        if (response.ok) {
        console.log("Login success:", result);
        localStorage.setItem("token", result.token || result.accessToken);
        login(result)
        navigate("/users");
        const action ={type:"user", data:result}
        store.dispatch(action)
          // navigation complete
      } else {
        console.error("Login failed:", result);
        alert(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    }
  };

  function navigateToRegistrationPage() {
    navigate("/reg/"+123);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>
      <div style={{ marginBottom: "15px" }}>
        <label>Name</label>
        <input
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "Name must be at least 3 characters" },
            maxLength: { value: 20, message: "Name cannot exceed 20 characters" },
          })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Password must be at least 6 characters" },
          })}
          placeholder="Enter your password"
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
      <Link to="/reg">Registration</Link>
      <button onClick={() => {
        navigateToRegistrationPage()
      }}>Navigate</button>
    </form>
  );
}

export default LoginForm;
