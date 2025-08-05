// This root component serves as a wrapper for the pages in the app, Outlet is
// component that loads the children prop of the router depending on what
// the path is. You can now add things like navigation to all pages with one
// set of code. A bit like templates.
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from './Root.module.css';

function RouteLayout() {
    return (
        <>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </>
    )
};

export default RouteLayout;