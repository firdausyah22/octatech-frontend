import React from "react";

// Component
import Sidebar from "../../Component/Admin/Sidebar";
import Navbar from "../../Component/Admin/Navbar";
import Article from "../../Component/Admin/Article";

function ArticlePage() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div class="container-fluid">
            <Article />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
