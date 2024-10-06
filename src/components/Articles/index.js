import React, { useState } from "react";

import "./index.css";

const articles = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dbylngblb/image/upload/v1728121013/5c72c6b4f096bbbec0680ab784a5dcef_t8zixb.jpg",
    title: "Grilled Tomatoes at Home",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dbylngblb/image/upload/v1728121013/71e2cd1709116400deb9af41ed9aa012_zjivog.jpg",
    title: "Snacks for Travel",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dbylngblb/image/upload/v1728121012/5a4907f80afeb54b1849b81ebf1eb5f2_ut2qts.jpg",
    title: "Post-workout Recipes",
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dbylngblb/image/upload/v1728121012/2678ff07019c289fb72556852cc6b74f_hvhauj.jpg",
    title: "How To Grill Corn",
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dbylngblb/image/upload/v1728121012/98fb3af9a51a3627a968ca95735063e2_qmfvpr.jpg",
    title: "Crunchwrap Supreme",
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dbylngblb/image/upload/v1728121012/6ae830e61504aecaf6d8b547eb08589a_forceu.jpg",
    title: "Broccoli Cheese Soup",
  },
];

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;

  const handleNextPage = () => {
    if (currentPage < Math.ceil(articles.length / cardsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedArticles = articles.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <div className="articles-main-background">
      <h2 className="articles-main-heading" Style="font-size: 24px;">
        Latest Articles
      </h2>
      <div className="articles-container">
        {displayedArticles.map((article) => (
          <div key={article.id} className="articles-card">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="card-img"
            />
            <h3 className="card-title">{article.title}</h3>
            <p className="card-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>
            <button className="card-button">Read More</button>
          </div>
        ))}
      </div>

      <div className="pagination-buttons">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="pagination-next-button"
        >
          <span className="pagination-comp-button">&#x3c;</span>
        </button>
        <span className="page-indicator">
          {currentPage + 1} / {Math.ceil(articles.length / cardsPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage >= Math.ceil(articles.length / cardsPerPage) - 1
          }
          className="pagination-next-button"
        >
          <span className="pagination-comp-button"> &#x3e;</span>
        </button>
      </div>
    </div>
  );
};

export default Articles;
