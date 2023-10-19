import { Outlet } from "react-router-dom";
import { NavbarWithSearch } from "../components/NavbarWithSearch";
import { Footer } from "../components/Footer";

const LayoutPublic = () => {
    return (
        <>
            <NavbarWithSearch />
            <main >
                <Outlet />
            </main>
            <hr className="my-12 mx-auto max-w-screen-xl border-blue-gray-50" />
            <Footer />
        </>
    );
};
export default LayoutPublic;
