/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import PageHeader from "../components/PageHeader";
import { collection } from "../services/controllers";
import Aside from "../components/Aside";
import ShopFilter from "../components/ShopFilter";
import ProductCard from "../components/cards/ProductCard";
import ProductPagination from "../components/ProductPagination";
import { updateCartState } from "../services/utils/helpers";
import { useCart } from "../services/hooks/useCart";

const Shop = () => {
  const [foods, setFoods] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const handleAddToCart = (foodId) => {
    const food = foods.filter((fd) => fd.id == foodId)[0];
    const newItems = food ? updateCartState(food, "add") : [];
    setCart(newItems);
    console.log(newItems);
  };

  useEffect(() => {
    try {
      collection("public/products")
        .then((res) => {
          setFoods(res.data.data);
        })
        .catch((err) => console.log(err.response.data.message));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <PageHeader title="TEF MENU" shopPage />
      <BreadCrumb />
      <div className="page-content mb-10 shop-page">
        <div className="container">
          <div className="row main-content-wrap">
            {/* Aside */}
            <Aside />
            <div className="col-lg-9 main-content pl-lg-6">
              {/* Filter Section */}
              <ShopFilter onItemsPerPageChange={setItemsPerPage} />
              {/* End Filter Section */}
              {/* Product Display Section */}
              <div className="row product-wrapper cols-lg-4 cols-md-3 cols-2">
                {foods?.length > 0 &&
                  foods?.map((food, i) => (
                    <ProductCard
                      key={i}
                      id={food?.id}
                      title={food?.title}
                      label={food?.label}
                      path={food?.image}
                      price={food?.price}
                      width={295}
                      height={369}
                      addToCart={handleAddToCart}
                    />
                  ))}
              </div>
              {/* End Product Display Section */}
              {/* Pagination Section */}
              <ProductPagination
                rows={foods}
                total={foods?.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
              {/* End Pagination Section */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
