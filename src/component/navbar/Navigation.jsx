import { NavLink } from "react-router-dom";

export function Navigation(){
    return(
        <nav className="bg-body-tertiary pt-3 pb-3">
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <NavLink to="/">Home</NavLink>
                        </div>
                        <div className="col-4">
                            <NavLink to="/chi_siamo">Chi siamo</NavLink>
                        </div>
                        <div className="col-4">
                            <NavLink to="/posts">Post</NavLink>
                        </div>
                    </div>       
            </div>
        </nav>
    )
}