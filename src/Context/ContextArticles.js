import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ArticlesContext = createContext();

const ArticlesProvider = (props) => {
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const url = "https://api-test-ln.herokuapp.com/articles";
      const articles = await axios.get(url);

      setArticles(articles.data.articles);
    };

    getArticles();
  }, []);

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        tags,
        setTags,
      }}
    >
      {props.children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
