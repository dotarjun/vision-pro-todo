import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function Header() {
    return (
        <header>
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/800px-Apple_logo_grey.svg.png"
                alt="Apple Logo"
                width={100}
                height={100}
                className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
            />

            <div>
                {/* Search Box */}
                <form className="flex items-center space-x-5 bg-white rounded-md p-2 s">
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                    <input type="text" placeholder="Search" />
                    <button hidden>Search</button>
                </form>
                {/* Avatar */}
            </div>
        </header>
    )
}

export default Header