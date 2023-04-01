const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json();

export default function Posts() {
  return (
    <>
      {
        posts.map((post) => (
          <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </>
        ))
      }
    </>
  )
}