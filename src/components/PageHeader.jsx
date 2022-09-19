/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import catImage from "../assets/images/shop/cat.jpg";
import { collection } from "../services/controllers";
import firstBanner from "../assets/images/sliders/second-banner.jpg";

const PageHeader = ({ shopPage = false, title }) => {
  const [categories, setCategories] = useState([]);

  const styles = {
    banner: {
      backgroundImage: `url(${firstBanner})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      color: "white",
    },
    colored: {
      backgroundColor: "#fff7ec",
    },
  };

  useEffect(() => {
    try {
      collection("categories/public")
        .then((res) => {
          setCategories(res.data.data);
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div
      className="page-header cph-header pl-4 pr-4"
      style={shopPage ? styles.banner : styles.colored}
    >
      <h1
        className={`page-title font-weight-light text-capitalize ${
          shopPage && "text-white"
        }`}
      >
        {title}
      </h1>

      {shopPage && (
        <div className="category-container row justify-content-center cols-2 cols-xs-3 cols-sm-4 cols-md-6 pt-6">
          {categories?.length > 0 &&
            categories?.map((cat) => (
              <div
                key={cat?.id}
                className="category category-ellipse mb-4 mb-md-0"
              >
                <a href="#">
                  <figure>
                    <img
                      src={catImage}
                      alt="category"
                      width={160}
                      height={161}
                    />
                  </figure>
                </a>
                <div className="category-content">
                  <h3 className="category-name">
                    <a href="#" className="text-white">
                      {cat?.name}
                    </a>
                  </h3>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PageHeader;
