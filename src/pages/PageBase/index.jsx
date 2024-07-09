import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

function PageBase() {
    return (
        <>
            <Outlet />
        </>
    )
}

export default PageBase