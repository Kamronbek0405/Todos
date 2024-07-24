import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../config/request";

export const Form = ({ refetch }) => {
  const { handleSubmit, register, formState, reset } = useForm();
  const submit = (data) => {
    request
      .post("/todos", data)
      .then((res) => {
       
        reset();
        refetch();
      })
      .finally(() => {});
  };
  return (
    <form className="flex items-center justify-center flex-col " onSubmit={handleSubmit(submit)}>
      <div className="mt-5">
        <input className=" w-[230px] h-[40px] rounded-lg border-2 border-gray-500" {...register("title")} type="text" />
      </div>
      <div>
        <input className=" w-[230px] h-[40px] rounded-lg border-2 border-gray-500 mt-3" {...register("description")} type="text" />
      </div>
      <button className="w-[100px] h-[40px] bg-gray-500 mt-3 rounded-lg shadow-lg shadow-gray-400 text-white" type="submit">send</button>
    </form>
  );
};
