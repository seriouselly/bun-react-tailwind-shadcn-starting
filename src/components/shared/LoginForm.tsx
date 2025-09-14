"use client";

import "@/public/styles/globals.css";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { z } from "zod";
import { api2 } from "@/lib";
import { useForm } from "@tanstack/react-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useNavigate } from "@tanstack/react-router";
import Cookie from "js-cookie";

// Schema validasi dengan Zod
const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password minimal 6 karakter")
    .max(24, "Password maksimal 24 karakter")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,24}$/,
      "password harus mengandung huruf besar, huruf kecil, angka, dan simbol khusus"
    ),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const defaultValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const onSubmit = async ({ value }: { value: LoginFormData }) => {
    try {
      // Simulate API call
      const user = await api2.post("/auth/login", value);
      console.log("User data from API:", user.data);

      const token: string = user.data.data.accessToken;
      const expires: string = user.data.data.expiresIn;

      let expiresIn: number;
      if (expires.endsWith("d")) {
        expiresIn = parseInt(expires) * 24 * 60 * 60;
      } else if (expires.endsWith("h")) {
        expiresIn = parseInt(expires) * 60 * 60;
      } else if (expires.endsWith("m")) {
        expiresIn = parseInt(expires) * 60;
      } else {
        expiresIn = 0;
      }

      Cookie.set("token", token, { expires: expiresIn / (24 * 60 * 60), path: "/" });

      toast.success("Login berhasil!");
      console.log("Form data:", value);

      // Reset form setelah berhasil submit
      navigate({ to: "/dashboard" });
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login gagal. Silakan coba lagi.");
    }
  };

  const { Field, handleSubmit } = useForm({
    defaultValues,
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit,
  });

  return (
    <div className="min-h-screen w-100 flex items-center justify-center">
      <div className="py-15 h-120 max-w-xl p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-8">Login Form</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {/* Email Field */}
          <Field name="email">
            {(field) => (
              <>
                <Label htmlFor={field.name} className="block mb-2 font-medium">
                  Email
                </Label>
                <Input
                  type="email"
                  id={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-400 ${
                    field.state.meta.errors.length > 0
                      ? "border-red-500 focus:border-red-500 dark:border-red-500 focus:dark:border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {field.state.meta.errors && (
                  <p className="text-red-500 text-xs">
                    {Array.isArray(field.state.meta.errors)
                      ? field.state.meta.errors
                          .map((err) =>
                            typeof err === "string"
                              ? err
                              : err?.message || "Unknown error"
                          )
                          .join(", ")
                      : String(field.state.meta.errors)}
                  </p>
                )}
              </>
            )}
          </Field>

          {/* Password Field */}
          <Field name="password">
            {(field) => (
              <>
                <Label htmlFor={field.name} className="block mt-4 mb-2 font-medium">
                  Password
                </Label>
                <div className="flex items-center relative w-78">
                    <Input
                      type={showPassword ? "text" : "password"}
                      id={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Enter your password"
                      className={`w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-400 ${
                        field.state.meta.errors.length > 0
                          ? "border-red-500 focus:border-red-500 dark:border-red-500 focus:dark:border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-4 py-2 hover:bg-transparent hover:cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  {field.state.meta.errors && (
                    <p className="text-red-500 text-xs">
                      {Array.isArray(field.state.meta.errors)
                        ? field.state.meta.errors
                          .map((err) =>
                            typeof err === "string"
                              ? err
                              : err?.message || "Unknown error"
                          )
                          .join(", ")
                        : String(field.state.meta.errors)}
                    </p>
                  )}
                </div>
              </>
            )}
          </Field>
          {/* Remember Me Checkbox */}
          <Field name="rememberMe">
            {(field) => (
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  id={field.name}
                  checked={field.state.value}
                  onChange={(e) => field.handleChange(e.target.checked)}
                  className="w-[12px] mx-2 my-3 dark:bg-gray-700 dark:border-gray-600"
                />
                <Label htmlFor="rememberMe">Remember Me</Label>
              </div>
            )}
          </Field>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!handleSubmit}
            className="w-50 mx-[50px] p-2 rounded-[15px] transition cursor-pointer font-semibold dark:bg-gray-200 dark:text-black dark:font-semibold bg-black text-white hover:bg-blue-800 hover:dark:text-white hover:dark:bg-blue-800"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
