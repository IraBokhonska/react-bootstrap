import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";

import { BlogList } from "./BlogList";
import { PaginationList } from "./PaginationList";

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(3);

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);

      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=247fce01689c485793e713c255654f06"
      );
      console.log(response);
      setBlogs(response.data.articles);
      setLoading(false);
    };

    getBlogs();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setBlogsPerPage(2);
      } else {
        setBlogsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const lastBlogIndex = currentPage * blogsPerPage;
  const firstBlogIndex = lastBlogIndex - blogsPerPage;
  const currentBlog = blogs.slice(firstBlogIndex, lastBlogIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from blog</h2>
          <div className="subtitle">get our latest news from blog</div>
        </div>
        <BlogList blogs={currentBlog} loading={loading} />
        <PaginationList
          blogsPerPage={blogsPerPage}
          totalBlogs={blogs.length}
          paginate={paginate}
        />
      </Container>
    </section>
  );
};
