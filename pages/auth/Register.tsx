import { AuthContainer } from "@/Components/Auth/AuthContainer";
import { EmptyClient } from "@/Components/Empty/EmptyClient";
import { TextInput } from "@/Components/Inputs";
import { Loading } from "@/public/svg";
import axios from "axios";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Register = () => {
  const router = useRouter();

  const {data,status} = useSession()


  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  
    if (status === 'loading') {
  
      return <div className="py-[20rem]">
        <Loading/>
        
        </div>
    }
  if(data){
    return router.push('/')
    // return <div className="py-[20rem]">
    //   <EmptyClient
    // title="Already Authorized"
    // desc="Log out"
    // />
    // </div>
  }
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then((res) => {
        router.push("/auth/Login");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  let body = (
    <>
      <TextInput
        label="Name"
        id="name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <TextInput
        label="Email"
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
      Already have accaunt?
      <Link className="font-bold" href="/auth/Login">
        Click Here
      </Link>
    </p>
  );

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <AuthContainer
        title="Register"
        body={body}
        footer={footer}
        onSubmit={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
    </>
  );
};

export default Register;
