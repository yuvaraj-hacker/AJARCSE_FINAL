import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import '../../../src/App.css'
import Sidebar from "../../shared/Sidebar/Sidebar";



export default function Main() {

    return (
        <>
            <div className="h-screen flex flex-col justify-between">
                <Header />

                <main className=" lg:mt-36 mt-28 ">
                    <Outlet />
                </main>

                <Footer />
            </div>

        </>




    )
}