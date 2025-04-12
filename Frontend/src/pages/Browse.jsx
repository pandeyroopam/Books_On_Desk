import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";
import Navbar from "../components/navbar";

export default function Browse() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // navigate("/login");
    }
  }, []);

  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center w-full  text-gray-800 p-4">
      <ProductList />
    </div>
    </>
  );
}
