import style from "./Posts.module.css";
import { PostCard } from "../../../card/PostCard";
import { useEffect} from "react";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";

export function Posts() {

  const {posts, axiosPostsCall, setPosts} = useContext(GlobalContext)
  console.log(posts) 
  console.log(axiosPostsCall)
  console.log(setPosts)
  
  useEffect(() => {
    axiosPostsCall();
  }, []);

  return (
    <div className={[style.bgcolor_lightGrey, style.flex_grow_1].join(" ")}>
      <div className="container">
        <Outlet/>
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-light mt-5 ms-5">
              <Link className="red" to={"/posts/create"}>Crea un post</Link>
            </button>
          </div>   
        </div>
        <div className="row row-gap-5 pt-5">
          {
          posts.length !== 0 ? (
            posts.map((el) => {
              return (
                <PostCard
                  key={el.id}
                  id={el.id}
                  slug = {el.slug}
                  title={el.title}
                  image={el.image}
                  content={el.content}
                  tags={el.tags}
                  callback={() => setPosts(posts.filter((post) => post.id !== el.id))}  // passo una funziona che aggiorna le pizze che sono disponibili
                />
              );
            })
          ) : (
            <div>non ci sono post</div>
          )}
        </div>
      </div>
    </div>
  );
}