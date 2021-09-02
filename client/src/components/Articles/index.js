import React, { useEffect, useState } from "react";
import Article_card from "../Article_card";
import Categorie_selector from "../Categorie_selector";
import "./style.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState(false);
  const [theme, setTheme] = useState(false);
  console.log(category);

  useEffect(() => {
    getDataFromApi(category, theme);
  }, [category, theme]);

  const data = { category, theme };
  console.log(data);
  const getDataFromApi = async () => {
    const url = `http://localhost:3000/articles/?category=${category}&theme=${theme}`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setArticles(responseJson);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
    console.log(e);
  };

  const handleChangeTheme = (e) => {
    setTheme(e.target.value);
  };

  console.log(theme);
  return (
    <>
    
      <Categorie_selector
        CategoryonChange={handleChangeCategory}
        ThemeonChange={handleChangeTheme}
      />
      <div className="articles">
        {articles.map((article) => (
          <Article_card key={article.dataValues.id} article={article} />
        ))}
      </div>
    </>
  );
};

export default Articles;
