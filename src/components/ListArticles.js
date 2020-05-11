import React, { Fragment, useContext, useEffect } from "react";
import Article from "./Article";
import { ArticlesContext } from "../Context/ContextArticles";

const ListArticles = () => {
  const { articles, setTags } = useContext(ArticlesContext);
  const tagsUnsorted = [];
  const tagsRepeat = [];

  //show articles only subtype = "7"
  const articlesShow = articles.filter((article) => {
    return article.subtype === "7";
  });

  useEffect(() => {
    articles.map((article) => {
      return article.taxonomy.tags.map((singleTag) => {
        return tagsUnsorted.push(singleTag.text);
      });
    });

    tagsUnsorted.forEach(function (numero) {
      return (tagsRepeat[numero] = (tagsRepeat[numero] || 0) + 1);
    });

    setTags(tagsRepeat);
  }, [articles]);

  return (
    <Fragment>
      {articlesShow.map((article, index) =>
        index % 4 === 0 ? (
          <div className="banner --small --mobile"></div>
        ) : (
          <Article key={article._id} article={article} cont={index} />
        )
      )}
    </Fragment>
  );
};

export default ListArticles;
