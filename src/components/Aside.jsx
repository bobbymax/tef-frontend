/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { batch, collection } from "../services/controllers";

const Aside = () => {
  const [tags, setTags] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    try {
      const tagData = collection("tags/public");
      const classesData = collection("classifications/public");

      batch([tagData, classesData])
        .then(
          axios.spread((...res) => {
            setTags(res[0].data.data);
            setClasses(res[1].data.data);
          })
        )
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <aside className="col-lg-3 sidebar widget-sidebar sidebar-fixed sidebar-toggle-remain shop-sidebar sticky-sidebar-wrapper">
      <div className="sidebar-overlay" />
      <a className="sidebar-close" href="#">
        <i className="p-icon-times" />
      </a>
      <div className="sidebar-content">
        <div className="sticky-sidebar pt-7" data-sticky-options="{'top': 10}">
          <div className="widget widget-collapsible">
            <h3 className="widget-title title-underline">
              <span className="title-text">Categories</span>
            </h3>
            <ul className="widget-body filter-items">
              {classes?.length > 0 &&
                classes?.map((fication) => (
                  <li key={fication?.id}>
                    <a href="#">{fication?.name}</a>
                  </li>
                ))}
            </ul>
          </div>
          {/* <div className="widget widget-collapsible">
            <h3 className="widget-title title-underline">
              <span className="title-text">Brand</span>
            </h3>
            <ul className="widget-body filter-items">
              <li>
                <a href="#">Nestle</a>
              </li>
              <li>
                <a href="#">Nescafe</a>
              </li>
              <li>
                <a href="#">Tropicana</a>
              </li>
              <li>
                <a href="#">Coca Cola</a>
              </li>
              <li>
                <a href="#">Benecol</a>
              </li>
              <li>
                <a href="#">Alpro</a>
              </li>
            </ul>
          </div> */}
          <div className="widget widget-collapsible">
            <h3 className="widget-title title-underline">
              <span className="title-text">Food Tags</span>
            </h3>
            <div className="widget-body mt-1">
              {tags?.length > 0 &&
                tags?.map((tag) => (
                  <a key={tag?.id} href="#" className="tag">
                    {tag?.name}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
