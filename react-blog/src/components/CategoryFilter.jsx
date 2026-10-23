
function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = ["All", "Technology", "Education", "Travel"];

  return (
    <div className="category-filters">
      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category ? "active" : ""
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
