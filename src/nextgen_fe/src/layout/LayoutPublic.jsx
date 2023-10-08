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
            <Footer />
        </>
    );
};
export default LayoutPublic;
