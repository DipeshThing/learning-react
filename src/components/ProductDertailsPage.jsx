import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditProductForm from "./EditProduct";


const ProductDetailsPage = () => {
  const { id: productId } = useParams();
  const [num, setNum] = useState(1);
//   const [showEdit, setShowEdit] = useState(false)
  const [showEdit, setShowEdit] = useState(null)
  console.log(productId);

  const [product, setProduct] = useState(null);

//   const [clicked,setClicked]=useState(false)

  const listProduct = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      console.log(data);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    listProduct();
  },[productId]);

  return (
    <div className="flex justify-center min-h-screen">
      <div className="bg-slate-700 text-white flex gap-20 justify-center items-center  min-w-screen  p-6 rounded-2xl m-8 hover:bg-slate-800 shadow-2xl hover:shadow-blue-900  ">
      <div className="flex flex-col  gap-6 ">
      <button  className="hover:bg-red-600" onClick={() => setShowEdit(product)}><FaEdit className="text-3xl"/></button>

      <button className="hover:bg-red-600"><MdDelete className="text-3xl" /></button>

      </div>
        <div>
          <div className="p-2 flex justify-center text-white">
            <img className="p-5 h-55 w-48 shrink-0" src={product?.image} alt={product?.title} />
          </div>
        </div>
        <div>
          <div className="flex mt-8 truncate"> Title: {product?.title}</div>
          <div>Price: {product?.price}</div>
          <div>Category: {product?.category}</div>
          <div>
            Rating: count:{product?.rating?.count} rate:{product?.rating?.rate}
          </div>
          <div className="flex gap-3 mt-6">

            <button
              onClick={num > 0 ? () => setNum(num - 1) : () => setNum(0)}
              className="h-6  w-8  bg-blue-600 text-white"
              >
              -
            </button>
            <p>{num}</p>
            <button
              onClick={() => setNum(num + 1)}
              className="h-6  w-8 bg-blue-600 text-white"
              >
              +
            </button>
            
          </div>
          <div className="flex justify-center mt-6">
            <button className="  hover:cursor-pointer p-2 border-2 bg-red-900 text-white rounded-2xl">
              Buy now
            </button>
            <button className="  h-10 hover:cursor-pointer  text-center border-2 bg-blue-900 text-white rounded-2xl">
              Add to cart
            </button>
          </div>

        </div>
        
      </div>
      { showEdit && 
      <EditProductForm
      product = {product}
      listProduct = {listProduct}
      onClose = {()=>setShowEdit(null)}
      />}
    </div>
  );
};

export default ProductDetailsPage;