"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { signup } from "@/app/voter-auth/auth.actions";
export const SignUpSchema = z
  .object({
    aadhaarNo: z
      .string()
      .min(12)
      .max(12)
      .regex(/^\d+$/, "Aadhaar number must be exactly 12 digits"),
    voterId: z
      .string()
      .min(10)
      .max(10)
      .regex(/^\d+$/, "Voter ID must be exactly 10 digits"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    contactNo: z
      .string()
      .regex(/^\d{10}$/, "Contact number must be exactly 10 digits"),
    email: z.string().email().optional(),
    address: z.string().min(1, "Address is required"),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
const Signup = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      aadhaarNo: "",
      voterId: "",
      firstName: "",
      lastName: "",
      contactNo: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
  });
  async function onSubmit(values: z.infer<typeof SignUpSchema>) {
    console.log(values);
    const res = await signup(values);
    if (res.success) {
      toast.success("Account created successfully");
      router.push(`/voter-dash/${res.id}`);
    } else {
      toast.error(res.error);
    }
  }
  return (
    <Card className="w-[300px] sm:w-[430px] md:w-[720px] lg:w-[800px]">
      <CardHeader>
        <CardTitle>Sign up </CardTitle>
        <CardDescription>Sign up here.</CardDescription>
      </CardHeader>
      <CardContent className="">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 md:grid grid-cols-2 gap-4 md:space-y-0"
          >
            {/* Aadhaar No Field */}
            <FormField
              control={form.control}
              name="aadhaarNo"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Aadhaar Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Aadhaar Number"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Voter ID Field */}
            <FormField
              control={form.control}
              name="voterId"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Voter ID</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Voter ID"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* First Name Field */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter First Name"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Last Name Field */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Last Name"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Contact Number Field */}
            <FormField
              control={form.control}
              name="contactNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Contact Number"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Email" type="email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Address Field */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Address" type="text" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="col-span-2">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Signup;
