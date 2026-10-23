
function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <span className="category">{post.category}</span>

      <h2>{post.title}</h2>

      <p>{post.description}</p>

      <div className="blog-author">
        Written by {post.author}
      </div>
    </div>
  );
}

export default BlogCard;
