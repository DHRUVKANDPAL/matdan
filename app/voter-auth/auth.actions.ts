"use server";
import { SignUpSchema } from "@/components/Signup";
import { Argon2id } from "oslo/password";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";
import { SigninSchema } from "@/components/Signin";
import { redirect } from "next/navigation";
export const signup = async (values: z.infer<typeof SignUpSchema>) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      aadhaarNo: values.aadhaarNo,
    },
  });
  if (existingUser) {
    console.log(existingUser.id);
  }
  if (existingUser) {
    return { error: "User already exists", success: false };
  }
  const hashedPassword = await new Argon2id().hash(values.password);

  const user = await prisma.user.create({
    data: {
      email: values.email,
      firstName: values.firstName,
      aadhaarNo: values.aadhaarNo,
      lastName: values.lastName,
      contactNo: values.contactNo,
      address: values.address,
      voterId: values.voterId,
      hashedPassword: hashedPassword,
    },
  });
  const session = await lucia.createSession(
    user.id,
    {}
  );
  console.log(session.id);
  const sessionCookie = await lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return { success: true, id: user.id };
};
export const signIn = async (values: z.infer<typeof SigninSchema>) => {
  const user = await prisma.user.findUnique({
    where: {
      aadhaarNo: values.aadharno,
    },
  });
  if (!user || !user.hashedPassword) {
    return { success: false, error: "Invalid Credentials!" };
  }
  const passwordMatch = await new Argon2id().verify(
    user.hashedPassword,
    values.password
  );
  if (!passwordMatch) {
    return { success: false, error: "Invalid Credentials!" };
  }


  const session = await lucia.createSession(user.id, {});
  const sessionCookie = await lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return { success: true, id: user.id };
};

export const logout = async (id: string) => {
  try {
    const sessionCookie = await lucia.createBlankSessionCookie();
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    redirect("/voter-auth");
  } catch (error) {
    redirect("/authenticate");
  }
};
