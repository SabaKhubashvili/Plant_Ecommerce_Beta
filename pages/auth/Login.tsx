// eslint-disable-next-line react-hooks/rules-of-hooks

import { AuthContainer } from "@/Components/Auth/AuthContainer";
import { MainButton } from "@/Components/Buttons/MainButton";
import { Container } from "@/Components/Container";
import { TextInput } from "@/Components/Inputs";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Succesfully logged in");
        router.push('/')
      } else if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
  
  const { data } = useSession();

  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  if (data) {
    return router.push("/");
  }

  let body = (
    <>
      <TextInput
        label="Email"
        type="email"
        id="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <TextInput
        label="Password"
        id="password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </>
  );
  let footer = (
    <p>
      Don&apos;t have accaunt?
      <Link className="font-bold" href="/auth/Register">
        Click Here
      </Link>
    </p>
  );

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <AuthContainer
        title="Login"
        body={body}
        footer={footer}
        onSubmit={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
    </>
  );
}
