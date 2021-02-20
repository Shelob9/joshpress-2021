
import {PostSummary} from '../components/Post'
export default function Posts({ posts }) {
    return (
      <>
        <>
          <h1>
                    Posts
          </h1>
                <div>
                    {posts.map(post => (
                        <PostSummary key={post.id} post={post} />
                    ))}
                </div>
        </>
      </>
    )
  }
  

  export async function getStaticProps() {
      const posts = await fetch('http://localhost:8888/wp-json/wp/v2/posts?context=edit').then(r => r.json());

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }