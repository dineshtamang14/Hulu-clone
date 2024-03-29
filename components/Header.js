import Image from "next/image";
import Link from "next/link";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <Link href="https://dineshtamang.tech">
            <a target="_blank" rel="noopener noreferrer">
            <div className="flex flex-grow justify-evenly max-w-2xl"> 
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>
            </a>
            </Link>
            <Link href="/">
            <a>
            <Image
                className="object-contain" 
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
                alt="logo-img"
            />
            </a>
            </Link>
        </header>
    )
}

export default Header;
