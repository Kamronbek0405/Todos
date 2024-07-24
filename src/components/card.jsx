import React from "react";
import { request } from "../config/request";
import { useLoading } from "../hooks/useLoading";
export const Card = ({ title, description, id, refetch }) => {
  const { isloading, endload, onload } = useLoading();
  const deleteItem = () => {
    onload();
    request
      .delete(`/todos/${id}`)
      .then((res) => {
        refetch();
      })
      .finally(() => {
        endload();
      });
  };

  const editCards = () => {
    const newTitle = prompt("", title);
    const newDescription = prompt("", description);
    request
      .put(`/todos/${id}`, { title: newTitle, description: newDescription })
      .then((res) => {
        refetch();
      });
  };
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      {isloading && <h1>Loading....</h1>}
      <div className="w-[450px] h-[220px] bg-white gap-3 mt-5 rounded-xl shadow-lg shadow-gray-400 text-center">
        <h1 className="text-4xl mt-5  font-bold">{title}</h1>
        <p className="text-xl py-5  font-medium">{description}</p>
        <div >
        <button className="w-[120px] h-[40px] rounded-lg text-white bg-red-400" onClick={deleteItem}>delete</button>
        <button  className="w-[120px] h-[40px] rounded-lg text-white ml-3 bg-green-400" onClick={editCards}>edit</button>
        </div>
      </div>
    </div>
  );
};
