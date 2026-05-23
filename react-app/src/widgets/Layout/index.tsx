import { Outlet} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout() {

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50
            dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 ">
            <Header/>
            <main className="">
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
}