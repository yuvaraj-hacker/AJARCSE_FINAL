import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import '../../../src/App.css'
export default function Main() {
    return (
        <>
            <div className="h-screen flex flex-col justify-between">
                <Header />
                <main className="lg:mt-32 md:mt-[92px] mt-[99px] md:py-10 py-5">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}