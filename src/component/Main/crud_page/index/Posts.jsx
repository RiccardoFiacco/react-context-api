import style from "./Posts.module.css";
import { PostCard } from "../../../card/PostCard";
import { useEffect} from "react";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";
import axios from "axios";

export function Posts() {

  const {posts, axiosPostsCall, setPosts} = useContext(GlobalContext)

  useEffect(() => {
    axiosPostsCall();
  }, []);

  function getTags(){
    axios.get("http://localhost:3000/posts/tags")
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
  }

  return (
    <div className={[style.bgcolor_lightGrey, style.flex_grow_1].join(" ")}>
      <div className="container">
        <Outlet/>
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-light mt-5 ms-5">
              <Link className="red" to={"/posts/create"}>Crea un post</Link>
            </button>
            <button type="button" onClick={getTags}className="btn btn-light mt-5 ms-5"> guarda la console</button>
          </div>   
        </div>
        <div className="row row-gap-5 pt-5">
          {
          posts.length !== 0 ? (
            posts.map((el) => {
              console.log(el)
              return (
                <PostCard
                  key={el.id}
                  id={el.id}
                  title={el.title}
                  image={el.image}
                  content={el.content}
                  tags={el.label}
                  callback={() => setPosts(posts.filter((post) => post.id !== el.id))}  // passo una funziona che aggiorna i post  che sono disponibili
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