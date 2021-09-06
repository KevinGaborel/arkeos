import React, { useEffect, useState } from "react";
import Article_card from "../Article_card";
import Categorie_selector from "../Categorie_selector";
import "./style.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState(false);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    getDataFromApi(category, theme);
  }, [category, theme]);

  const data = { category, theme };
  const getDataFromApi = async () => {
    const url = `http://localhost:3000/articles?category=${category}&theme=${theme}`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setArticles(responseJson);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeTheme = (e) => {
    setTheme(e.target.value);
  };

  return (
    <>
    
      <Categorie_selector
        CategoryonChange={handleChangeCategory}
        ThemeonChange={handleChangeTheme}
      />
      <div className="articles">
        {articles.map((article) => (
          <Article_card key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export default Articles;
