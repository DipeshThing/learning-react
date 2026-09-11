import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProductPage from "./ProductPage";
import SellProduct from "../components/SellProduct"
// import SellProduct from "./SellProduct"
import { useNavigate } from 'react-router';

const Practice = () => {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  // const [selectedProduct, setSelectedProduct] = useState(false);
  const [productDetails, setProductDetails] = useState(null)
  //   const listProduct = async() => {
  //     try{
  //       const response = await fetch("https://fakestoreapi.com/products")
  //       const data = await response.json()
  //       console.log(data)
  //     }catch (err) {
  //       console.log(err);
  //     }
  //   };
  
  const listProduct = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      console.log(data);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    listProduct();
  }, []);
  

  return (
    <div>
      <div onClick={()=>setShowAddProduct(true)} className='bg-orange-500 hover:bg-orange-300 hover:cursor-pointer active:scale-95 rounded-xl flex justify-self-end mr-3 mt-2 p-1'>Add Product</div>
      <div className="flex flex-wrap gap-3 justify-evenly mt-3">
        {product.length > 0 &&
          product.map((items) => (
            // <div className='flex justify-center' onClick = {()=>navigate(`/product/${items.id}`)}>
            <div
              // onClick={() => setSelectedProduct(items)}
              onClick= {() => navigate(`/product-details/${items.id}`)}
              className="border rounded-xl hover:shadow-xl hover:shadow-black-100 p-5 w-60"
            >
              <div>{items.category}</div>
              <div className="flex justify-center">
                <img
                  className="rounded-xl h-60 w-50 mb-3"
                  src={items.image}
                  alt=""
                />
              </div>
              <h1 className="font-bold text-2xl text-blue-700 line-clamp-1">
                {items.title}
              </h1>
              <div className="text-orange-600 font-bold"> $ {items.price}</div>
            </div>

            // </div>
          ))}
      </div>
      {/* {productDetails && (
        <ProductPage
          product={productDetails}
          onClose={() => setProductDetails(null)}
        />
      )} */}
      {
          showAddProduct && 
          <SellProduct 
          setShowAddProduct = {setShowAddProduct}
          onClose = {()=>setShowAddProduct(false)}/>
        }
    </div>
  );
};

export default Practice;

// import { useState } from "react";
// import ProductPage from "./ProductPage";

// function ProductList() {
//   const [selectedProductId, setSelectedProductId] = useState(null);

//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product.id} onClick={() => setSelectedProductId(product.id)}>
//           <p>{product.title}</p>
//         </div>
//       ))}

//       {selectedProductId && (
//         <ProductPage
//           productId={selectedProductId}
//           onClose={() => setSelectedProductId(null)}
//         />
//       )}
//     </div>
//   );
// }
// ------------------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react'
// import axios from 'axios';

// const Product = () => {
//   const [product, setProduct] = useState([])
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [count, setCount] = useState(0);

//   const listProduct = async () => {
//     try {
//       const { data } = await axios.get("https://fakestoreapi.com/products")
//       setProduct(data)
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     listProduct()
//   }, [])

//   const handleProductClick = async (productId) => {
//     setLoading(true);
//     setSelectedProduct({});
//     try {
//       const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`);
//       setSelectedProduct(data);
//     } catch (err) {
//       console.log(err);
//       setSelectedProduct(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     setCount(0);
//   };

//   return (
//     <div className='flex flex-wrap gap-3 justify-evenly mt-3'>
//       {product.length > 0 && product.map((items) => (
//         <div className='flex justify-center' key={items.id} onClick={() => handleProductClick(items.id)}>
//           <div className='border rounded-xl hover:shadow-xl hover:shadow-black-100 p-5 w-60'>
//             <div>{items.category}</div>
//             <div className='flex justify-center'>
//               <img className='rounded-xl h-60 w-50 mb-3' src={items.image} alt="" />
//             </div>
//             <h1 className='font-bold text-2xl text-gray-700 line-clamp-1'>{items.title}</h1>
//             <div className='text-orange-600 font-bold'> $ {items.price}</div>
//             <div>Rating: <span className='text-orange-500'>{items.rating.rate}</span>/<span className='text-orange-500'>{items.rating.count}</span></div>
//           </div>
//         </div>
//       ))}

//       {selectedProduct && (
//         <div onClick={closeModal} className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           <div onClick={(e) => e.stopPropagation()} className="flex flex-row items-center gap-4 bg-gray-300 rounded-2xl p-4 max-w-3xl relative">
//             <button onClick={closeModal} className="absolute top-2 right-3 text-xl font-bold hover:cursor-pointer">✕</button>
//             {loading ? (
//               <p className="p-10">Loading...</p>
//             ) : (
//               <>
//                 <div className='shrink-0'><img className="h-96 w-80 object-contain" src={selectedProduct.image} alt="" /></div>
//                 <div className="flex flex-col">
//                   <div>Title: {selectedProduct?.title}</div>
//                   <div>Rating: <span className='text-orange-500'>{selectedProduct.rating?.rate}</span> / <span className='text-orange-500'>{selectedProduct.rating?.count}</span></div>
//                   <div>Price: <span className="text-orange-500">${selectedProduct.price}</span></div>
//                   <div>Category: {selectedProduct.category}</div>
//                   <div className="flex flex-row gap-4 mb-4 mt-2">
//                     Quantity:
//                     <button disabled={count === 0} onClick={() => setCount((prev) => Math.max(prev - 1, 0))} className="bg-gray-500 px-4 disabled:bg-gray-300 hover:cursor-pointer hover:bg-gray-700 disabled:text-gray-500 rounded disabled:cursor-not-allowed">-1</button>
//                     <p className="w-6 text-center">{count}</p>
//                     <button className="bg-gray-500 px-4 rounded hover:cursor-pointer hover:bg-gray-700" onClick={() => setCount(count + 1)}>+1</button>
//                   </div>
//                   <div className="flex flex-row gap-4">
//                     <button className="bg-blue-500 hover:bg-blue-700 px-5 rounded hover:cursor-pointer"><span className="text-2xl text-white">Buy Now</span></button>
//                     <button className="bg-orange-500 hover:bg-orange-700 px-5 rounded hover:cursor-pointer"><span className="text-2xl text-white">Add to Cart</span></button>
//                   </div>
//                   <div>Description: <span className="">{selectedProduct.description}</span></div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Product;

//------------------------------------------------------------------------------------------------------------
