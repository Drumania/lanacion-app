import React from "react";
import DateFormat from "./DateFormat";

const Article = (props) => {
  return (
    <article className="mod-caja-nota lugares w-100-mobile">
      <section id="" className="cont-figure">
        <a
          href={`/tema/` + props.article.taxonomy.tags[0].slug}
          className="figure"
        >
          <picture id="" className="content-pic picture">
            <img
              src={props.article.promo_items.basic.url}
              alt="img_article"
              className="content-img"
            />
          </picture>
        </a>
      </section>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <a href={`/tema/` + props.article.taxonomy.tags[0].slug}>
            <b>{props.article.headlines.basic}</b>
            <br />
            {props.article.promo_items.basic.subtitle}
          </a>
        </h2>
        <DateFormat datePublish={props.article.display_date} />
      </div>
    </article>
  );
};

export default Article;
