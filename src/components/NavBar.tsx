import AnimeLogo from "../assets/AnimeLogo.png"
import {Search} from "lucide-react"
import {Bell} from "lucide-react"
import {X} from "lucide-react"
import { useState } from "react"

export default function NavBar(){

    const [activeManu, setActiveMenu] = useState("Home")
    const [showSearch, setShowSearch] = useState(false)

    const menu = [
        {title: "Home"},
        {title: "Anime Shows"},
        {title: "Support"},
        {title: "Subscription"},

    ]

    return(
        <>
        <div className="flex items-center justify-between py-5">
            <div><img src={AnimeLogo} alt="" className="h-10 w-[30]"/></div>
            <div className="flex items-center px-5 py-3 border-2 border-[#1e1e1e] rounded-2xl space-x-8">
             {menu.map((item) => (
                <button key={item.title}
                onClick={() => setActiveMenu(item.title)}
                className={`rounded-xl px-4 py-2  transition-colors ${activeManu === item.title
                    ? "bg-[#1e1e1e] text-white"
                    : "text-gray-400 hover:text-white"
                }`}>
                    {item.title}
                </button>
             ))}
            </div>
            <div className="flex items-center space-x-3">
            {showSearch && (
            <input
            type="text"
            placeholder="Search"
            autoFocus
            className="w-40 rounded-xl border border-[#1e1e1e] bg-white px-3 py-2 text-[#1e1e1e] outline-none placeholder:text-gray-500 focus:border-gray-500"
          />
                )}
                <button
                onClick={() => setShowSearch(!showSearch)}
                aria-label={showSearch ? "Close search" : "Open search"}
                className="text-white"
                >
                {showSearch ? <X /> : <Search />}
                </button>
                <button><Bell/></button>
            </div>

        </div>
        </>
    )
}