
import { useState } from "react";
import posts from "./data/posts.json";
import BlogCard from "./components/BlogCard";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = posts.filter((post) => {
    const query = search.trim().toLowerCase();

    const matchesSearch =
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory === "All" ||
      post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div
      className="app"
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
        color: "#172033",
      }}
    >
      {/* Navigation */}
      <header
        style={{
          background: "#101828",
          color: "white",
          padding: "22px 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background: "#6366f1",
              display: "grid",
              placeItems: "center",
              fontSize: "23px",
              fontWeight: "bold",
            }}
          >
            B
          </div>

          <div>
            <h2 style={{ margin: 0, fontSize: "21px" }}>Briefly</h2>
            <span style={{ color: "#98a2b3", fontSize: "12px" }}>
              IDEAS WORTH READING
            </span>
          </div>
        </div>

        <nav style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <a href="#home" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
          <a
            href="#articles"
            style={{ color: "#cbd5e1", textDecoration: "none" }}
          >
            Articles
          </a>
          <a
            href="#footer"
            style={{ color: "#cbd5e1", textDecoration: "none" }}
          >
            About
          </a>
        </nav>
      </header>

      {/* Hero section */}
      <section
        id="home"
        style={{
          background:
            "linear-gradient(135deg, #101828 0%, #202b50 65%, #3730a3 100%)",
          color: "white",
          padding: "65px 20px 75px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            color: "#c7d2fe",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "3px",
          }}
        >
          THE BLOG JOURNAL
        </span>

        <h1
          style={{
            maxWidth: "760px",
            margin: "20px auto 16px",
            fontSize: "clamp(34px, 5vw, 54px)",
            lineHeight: "1.15",
            letterSpacing: "-1.5px",
          }}
        >
          Fresh perspectives.
          <br />
          <span style={{ color: "#a5b4fc" }}>Meaningful ideas.</span>
        </h1>

        <p
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            color: "#d0d5dd",
            lineHeight: "1.8",
            fontSize: "16px",
          }}
        >
          Discover useful insights on technology, education, and travel.
          Read something new, learn something useful, and keep exploring.
        </p>

        <a
          href="#articles"
          style={{
            display: "inline-block",
            marginTop: "28px",
            padding: "13px 23px",
            borderRadius: "8px",
            background: "#818cf8",
            color: "#101828",
            textDecoration: "none",
            fontWeight: "700",
          }}
        >
          Explore Articles ↓
        </a>
      </section>

      {/* Articles section */}
      <main
        id="articles"
        className="container"
        style={{ paddingTop: "45px", paddingBottom: "25px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: "15px",
            flexWrap: "wrap",
            marginBottom: "25px",
          }}
        >
          <div>
            <p
              style={{
                color: "#6366f1",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "2px",
                marginBottom: "8px",
              }}
            >
              OUR COLLECTION
            </p>

            <h2
              style={{
                fontSize: "30px",
                letterSpacing: "-0.8px",
                margin: 0,
              }}
            >
              Explore the latest
            </h2>
          </div>

          <span style={{ color: "#667085", fontSize: "14px" }}>
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "article" : "articles"}
          </span>
        </div>

        <div style={{ maxWidth: "650px", marginBottom: "24px" }}>
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Results */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            margin: "25px 0 18px",
          }}
        >
          <p style={{ margin: 0, color: "#667085", fontSize: "14px" }}>
            {search
              ? `Search results for "${search}"`
              : `Showing ${selectedCategory.toLowerCase()} articles`}
          </p>

          {(search || selectedCategory !== "All") && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              style={{
                background: "transparent",
                color: "#4f46e5",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                padding: "8px",
              }}
            >
              Clear filters ×
            </button>
          )}
        </div>

        <div className="blog-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))
          ) : (
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "55px 20px",
                background: "white",
                border: "1px solid #e4e7ec",
                borderRadius: "16px",
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>
                404
              </div>

              <h3 style={{ margin: "0 0 10px" }}>No articles found</h3>

              <p style={{ color: "#667085", lineHeight: "1.7" }}>
                Try another keyword or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
                style={{
                  padding: "11px 18px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#4f46e5",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Show all articles
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer
        id="footer"
        className="blog-footer"
        style={{ marginTop: "45px", padding: "35px 20px" }}
      >
        <h3 style={{ margin: "0 0 10px", color: "white" }}>Briefly.</h3>
        <p style={{ margin: "0 0 12px", lineHeight: "1.7" }}>
          A little reading. A lot of inspiration.
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "#98a2b3" }}>
          © 2026 Briefly Blog · Built with React
        </p>
      </footer>
    </div>
  );
}

export default App;
