"use client"

import { useMediaQuery } from "@uidotdev/usehooks";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header = () => {
    const isMobile = useMediaQuery("(max-width: 992px)");
    const isDesktop = useMediaQuery("(min-width: 993px)");

    return (
        <div className="w-full">
            <div className="items-center p-4">
                {isDesktop ? <MainNav /> : <MobileNav />}
            </div>
        </div>
    );
};

export default Header;
