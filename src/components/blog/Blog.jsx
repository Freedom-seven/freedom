/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Blog.css";
import Post from "./Post";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <div className="blog__container grid">
        {Post.map(({ id, link, category, image, date, title }) => {
          return (
            <div className="blog__card" key={id}>
              <div className="blog__thumb">
                <a href={link}>
                  <span className="blog__category">Review</span>
                  <img src={image} alt="" className="blog__img" />
                </a>
              </div>
              <div className="blog__details">
                <h3 className="blog__title">{title}</h3>
                <div className="blog__meta">
                  <span>{date}</span>
                  <span className="blog__dot">.</span>
                  <span>Freedom</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
