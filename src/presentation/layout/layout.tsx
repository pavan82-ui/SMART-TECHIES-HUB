import type { ReactNode } from "react";
import Header from "./header";


type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header></Header>
            <h1>Layout</h1>
            <div>{children}</div>
        </div>
    );
};

export default Layout