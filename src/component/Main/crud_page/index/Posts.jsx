import axios from "axios";
import style from "./Posts.module.css";
import { PostCard } from "../../../card/PostCard";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function Posts() {

  const [posts, setPosts] = useState([]);  
  const uri = "http://localhost:3000/posts/";

  /*function deletePost(id) {
    const flag = confirm("sei sicuro?")
    //function per eliminare un post
    if(flag){
    axios
      .delete(uri+id)
      .then((res) => {
        console.log(res)
        setPosts(posts.filter((post) => post.id !== id)); //prendo tutto tranne il post che corrisponde al post che ho passato alla funzione
      })
      .catch((err) => {
        console.error(err);
      });
    }else{
      alert("operazione annullata")
    }
  } */

  function axiosPostsCall() {
    axios
      .get(uri)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

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