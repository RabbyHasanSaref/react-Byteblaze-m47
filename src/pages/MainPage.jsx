import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const MainPage = () => {
    return (
        <div className="container mx-auto">
            <div className="h-16">
                <Navbar></Navbar>
            </div>

            <div className="min-h-[calc(100vh-116px)]">
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainPage;