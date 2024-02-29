import Head from "next/head";
import NavPane from "./navpane";

const Layout = (props) => {
    
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="relative flex w-full h-screen overflow-auto bg-white">
                <NavPane />
                {props.children}
            </div>
        </>
    )
};

export default Layout;
