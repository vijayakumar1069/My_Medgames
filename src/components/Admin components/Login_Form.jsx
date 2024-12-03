"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginAction } from "@/app/actions/(Admin)/admin_login_function";
import { signIn } from "@/lib/auth";
import { useRequest } from "../custom hooks/useRequest";

// Define the validation schema
const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  password: z
    .string()
    .min(1, { message: "Password must be at least 6 characters" }),
});

export default function Login_Form() {
  const router = useRouter();

  // Initialize form with zodResolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { loading, success, error, sendRequest } = useRequest();

  async function onSubmit(values) {
    // Send the login request via the custom hook
    const result = await sendRequest(() => loginAction(values));
  
    if (result?.success) {
      // If login is successful, navigate to the dashboard
      router.push("/admin-dashboard");
    }
  }
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side with image */}
          <div className="hidden md:block relative h-[500px] bg-gradient-to-br from-purple-600 to-pink-500">
            <Image
              src="/admin_login_img.jpg"
              alt="Login illustration"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
              <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
            </div>
          </div>

          {/* Right side with form */}
          <div className="p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Admin Login
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Please sign in to continue
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="admin@example.com"
                            type="email"
                            {...field}
                            className="rounded-lg border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            autoComplete="off"
                            {...field}
                            className="rounded-lg border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  {error && (
                    <div className="text-sm text-red-500 bg-red-50 p-3 rounded-lg">
                      {error}
                    </div>
                  )}
                  {success && (
                    <div className="text-sm text-green-500 bg-green-50 p-3 rounded-lg">
                      {success}
                    </div>
                  )}

                  <Button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    {loading ? "Signing in..." : "Sign in"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
