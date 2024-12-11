import axios from "axios";

export function DeleteButton({id="", callback = ()=>{}}){

    const uri = `http://localhost:3000/posts/${id}`;
    function deletePost() {
        const flag = confirm("sei sicuro?")
        //function per eliminare un post
        if(flag){
        axios
          .delete(uri)
          .then((res) => {
            console.log(res)
            callback()
          })
          .catch((err) => {
            console.error(err);
          });
        }else{
          alert("operazione annullata")
        }
    }

    return(
        <button className="btn btn-danger" onClick={deletePost}>elimina</button>
    )
}