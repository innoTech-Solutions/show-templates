import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const MainNav = () => {
    return (
        <div className="flex flex-row justify-between">
            <div>
                <Link href="/" className="font-bold text-2xl">
                    house*
                </Link>
            </div>

            <div className="[&>*]:text-lg flex gap-4">
                <Link href="#" className="">
                    Our units
                </Link>
                <Link href="#" className="">
                    Contact us
                </Link>
                <Link href="#" className="">
                    FAQ
                </Link>
            </div>


            <div className="[&>*]:text-lg flex gap-4">
                <Link href="/fb.com">
                    <Facebook />
                </Link>
                <Link href="/ig.com">
                    <Instagram />
                </Link>
            </div>
        </div>
    );
};

export default MainNav;
