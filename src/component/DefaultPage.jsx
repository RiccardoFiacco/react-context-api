import { Header }  from "./header/Header";
import { Footer }  from "./footer/Footer";
import { Navigation } from "./navbar/Navigation";
import { Outlet } from "react-router-dom";
import style from "./DefaultPage.module.css";


export function DefaultPage(){
    return(
        <div className={`d-flex flex-column ${style.vh100}`}>
            <div className="full-navigation">
                <Header/>
                <Navigation/>
            </div>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}