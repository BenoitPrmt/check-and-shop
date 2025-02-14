import {Outlet} from "react-router";


export default function AppLayout() {
    return (
        <>
           <div className={"container mx-auto"}>
               <Outlet />
           </div>
        </>
    );
}