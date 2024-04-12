import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Facebook, Instagram, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const MobileNav = () => {

    return (
        <Sheet>
            <div className="flex items-center">
                <SheetTrigger>
                    <Button variant="ghost" size="icon">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <Link href="/" className="ml-2 font-bold text-xl">
                    house*
                </Link>
            </div>

            <SheetContent side="left">
                <div className="flex flex-col">
                    <div className="mb-4">
                        <Link href="/" className="font-bold text-2xl">
                            house*
                        </Link>
                    </div>

                    <div className="[&>*]:text-lg flex flex-col gap-2">
                        <Link href="#" className="hover:text-gray-600">
                            Our units
                        </Link>
                        <Link href="#" className="hover:text-gray-600">
                            Contact us
                        </Link>
                        <Link href="#" className="hover:text-gray-600">
                            FAQ
                        </Link>
                    </div>

                    <div className="[&>*]:text-lg flex mt-4 gap-4">
                        <Link href="/fb.com">
                            <Facebook />
                        </Link>
                        <Link href="/ig.com">
                            <Instagram />
                        </Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
