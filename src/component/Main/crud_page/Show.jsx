import { useEffect, useState } from "react";
import { axiosPostsCall } from "../../../utils/utils";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router";
import { DeleteButton } from "../../delete_button/DeleteButton";

export function Show(){
    let {id} = useParams();
    const uri = `http://localhost:3000/posts/${id}`;  
    const [post, setPost] = useState({})
    const navigator = useNavigate();

    useEffect(() => {
        // axiosPostsCall(uri,setPost); //perche con la arrow function non funziona?  
        axiosPostsCall(uri,(post) => {
            setPost(post[0])
        });
    }, [uri]);//facciamo la chiamata al cambiamento dell'id (perche con post si rompe in quanto all'interno c'è set post che cambia il valore creando un loop)
    console.log(post)
    return(
        post &&
        <div className="container">
            <div className="row text-center pt-5">
                <div className="col">{
                    post.previous && <Link to={`/posts/${post.previous}`}>precedente</Link> 
                    }
                </div>
                <div className="col">{
                    post.successive && <Link to={`/posts/${post.successive}`}>successivo</Link>
                    }
                </div>
                <h1>{post.title}</h1>
                <div className="col pt-5">
                    <img src={post.image && id<=5 ? "http://localhost:3000/imgs/posts/"+post.image : post.image} alt="" />
                </div>
                <div className="col pt-5">
                    <p>{post.content}</p>
                </div>
            </div>
            <div className="row pb-5">
                <div className="col text-star mt-5">
                    <DeleteButton id={id} callback={() => navigator("/posts")}/>
                </div>
                <div className="col text-end mt-5">
                    <button type="button" className="btn btn-success" onClick={() => navigator("/posts")}>torna indietro</button>
                </div>
            </div>    
        </div> 
    )
}