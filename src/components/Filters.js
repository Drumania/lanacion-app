import React, { Fragment, useContext } from "react";
import { ArticlesContext } from "../Context/ContextArticles";

const Filters = () => {
  const { tags } = useContext(ArticlesContext);
  console.log(tags);

  //ORDENAR LOS OBJECT.VALUES DE TAGS
  // SLICE(0, 9)

  return (
    <Fragment>
      <div className="row">
        <div className="com-titleWithfollow hlp-marginBottom-15">
          <h1 className="com-title-section-xl hlp-marginBottom-40">
            Acumulado Grilla
          </h1>
        </div>
      </div>
      <div className="row">
        <div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
          <a href="#!" className="">
            Platos principales
          </a>
          <a href="#!" className="">
            Cerdo
          </a>
          <a href="#!" className="">
            Papas
          </a>
          <a href="#!" className="">
            Date un gustito
          </a>
          <a href="#!" className="">
            La familia
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Filters;
