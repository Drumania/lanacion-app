import React from "react";
import "./App.css";
import ArticlesProvider from "./Context/ContextArticles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filters from "./components/Filters";
import Banners from "./components/Banners";
import ViewMore from "./components/ViewMore";
import ListArticles from "./components/ListArticles";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <ArticlesProvider>
      <div id="wrap">
        <Header />
        <main>
          <Banners />
          <div className="lay-sidebar">
            <div className="sidebar__main">
              <Filters />
              <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
                <ListArticles />
                <div className="transparency"></div>
              </section>
              <ViewMore />
            </div>
            <Sidebar />
          </div>
        </main>
      </div>
      <Footer />
    </ArticlesProvider>
  );
}

export default App;
