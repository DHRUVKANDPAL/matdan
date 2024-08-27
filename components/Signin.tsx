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
import { signIn } from "@/app/voter-auth/auth.actions";
// import { signIn } from "@/app/voter-auth/auth.actions";

export const SigninSchema = z
  .object({
    aadharno: z.string().length(12,"This is not a valid Aadhar no"),
    password: z.string().min(6),
  })
const Signin = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      aadharno: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof SigninSchema>) {
   //  console.log(values);
    const res = await signIn(values);
    if (res.success) {
      toast.success("Logged in successfully");
      router.push(`/voter-dash/${res.id}`);
    } else {
      toast.error(res.error);
    }
  }
  return (
    <Card className="w-[300px] sm:w-[430px] md:w-[540px]">
      <CardHeader>
        <CardTitle>Sign in </CardTitle>
        <CardDescription>Sign in here.</CardDescription>
      </CardHeader>
      <CardContent className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 ">
            <FormField
              control={form.control}
              name="aadharno"
              render={({ field }) => (
                <FormItem >
                  <FormLabel>Aadhar no</FormLabel>
                  <FormControl>
                    <Input placeholder="123456784321" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="******" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Signin;