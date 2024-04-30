import CompFooter from "./CompFooter";
import CompNavbar from "./CompNavbar";
import Lesson1 from "./Lesson1";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const articles = [
  { id: 1, title: "Article 1", content: <Lesson1 /> },
  { id: 2, title: "Article 2", content: "Content of Article 2..." },
  // Add more articles as needed
];

function ArticlePage() {
  const [selectedArticle, setSelectedArticle] = useState(articles[0]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <ul className="list-group">
            {articles.map((article) => (
              <li
                key={article.id}
                className="list-group-item list-group-item-action"
                onClick={() => setSelectedArticle(article)}>
                {article.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-9">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{selectedArticle.title}</h4>
              <p className="card-text">{selectedArticle.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Lessons() {
  return (
    <>
      <CompNavbar />

      <ArticlePage />
      <CompFooter />
    </>
  );
}
