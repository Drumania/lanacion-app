import React from "react";
import imagenArticle from "../Acumulado_archivos/3054322h600.webp";

const Sidebar = () => {
  return (
    <div className="sidebar__aside">
      <div className="banner --desktop --large"></div>
      <div className="com-ranking hlp-none hlp-tablet-none">
        <h2 className="com-title-section-m">Recetas más leídas</h2>
        <ol className="com-ordered">
          <li className="com-item">
            <article className="mod-caja-nota --border ohlala">
              <section id="" className="cont-figure">
                <a
                  href="http://especiales.lanacion.com.ar/arc-css/nota-receta.asp"
                  className="figure"
                >
                  <picture id="" className="content-pic picture">
                    <img
                      src={imagenArticle}
                      alt="img_article"
                      className="content-img"
                    />
                  </picture>
                </a>
              </section>
              <div className="mod-caja-nota__descrip">
                <h2 className="com-title-acu">
                  <a href="http://especiales.lanacion.com.ar/arc-css/nota-receta.asp">
                    <b>La escuela.</b> que tiene de escudo al Che Guevara y
                    donde izan la bandera de Cuba
                  </a>
                </h2>
              </div>
            </article>
          </li>
          <li className="com-item">
            <article className="mod-caja-nota --border ohlala">
              <section id="" className="cont-figure">
                <a
                  href="http://especiales.lanacion.com.ar/arc-css/nota-receta.asp"
                  className="figure"
                >
                  <picture id="" className="content-pic picture">
                    <img
                      src={imagenArticle}
                      alt="img_article"
                      className="content-img"
                    />
                  </picture>
                </a>
              </section>
              <div className="mod-caja-nota__descrip">
                <h2 className="com-title-acu">
                  <a href="http://especiales.lanacion.com.ar/arc-css/nota-receta.asp">
                    <b>La escuela.</b> que tiene de escudo al Che Guevara y
                    donde izan la bandera de Cuba
                  </a>
                </h2>
              </div>
            </article>
          </li>
          <li className="com-item">
            <article className="mod-caja-nota --border ohlala">
              <section id="" className="cont-figure">
                <a
                  href="http://especiales.lanacion.com.ar/arc-css/nota-receta.asp"
                  className="figure"
                >
                  <picture id="" className="content-pic picture">
                    <img
                      src={imagenArticle}
                      alt="img_article"
                      className="content-img"
                    />
                  </picture>
                </a>
              </section>
              <div className="mod-caja-nota__descrip">
                <h2 className="com-title-acu">
                  <a href="http://especiales.lanacion.com.ar/arc-css/nota-receta.asp">
                    <b>La escuela.</b> que tiene de escudo al Che Guevara y
                    donde izan la bandera de Cuba
                  </a>
                </h2>
              </div>
            </article>
          </li>
        </ol>
      </div>
      <div className="banner --desktop --large"></div>
    </div>
  );
};

export default Sidebar;
