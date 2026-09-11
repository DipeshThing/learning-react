import React from "react";
import { IoClose } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditProductForm from "./EditProduct";


const ProductPage = ({ product, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex justify-center items-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-200 rounded-4xl py-3 px-6 w-150"
      >
        <div className="flex justify-end" onClick={onClose}>
          <IoClose className="text-4xl hover:cursor-pointer active:bg-gray-300 rounded-xl" />
        </div>
        <div className="flex flex-row">
          <div className="shrink-0 flex items-center">
            <img className="h-60 w-50 mr-2" src={product.image} alt="" />
          </div>
          <div className="">
            <div>{product.category}</div>
            <div className="text-blue-700">{product.title}</div>
            <div className="text-orange-600">$ {product.price}</div>
            <div>Rating:<br/>{product.rating.rate}/{product.rating.count}</div>
            <div className="line-clamp-4"><span className="text-blue-700">Description:</span><br/> {product.description}</div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-2">
        <div>
            <button className="bg-amber-600 active:bg-amber-500 p-1 hover:cursor-pointer hover:scale-95 rounded text-white flex flex-row gap-2">Edit <FaEdit className="mt-1"/></button>
        </div>
        <div>
        <button className="bg-amber-600 active:bg-amber-500 p-1 rounded hover:cursor-pointer hover:scale-95 text-white flex flex-row gap-2">Delete <MdDelete className="mt-1"/></button>
        </div>
        </div>
        <EditProductForm />
      </div>
    </div>
  );
};

export default ProductPage;
