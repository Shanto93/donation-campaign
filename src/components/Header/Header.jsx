import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        // This is Navbar Section
        <nav className="flex justify-between items-center py-3 shadow-lg">
            {/* Here is NavBar image part work */}
            <div>
                <img className="w-36" src="./../../../assets/Logo.png" alt="" />
            </div>

            {/* Here is NavBar list part work */}
            <div>
                <ul className="flex gap-5">
                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-red-800 text-white rounded-lg px-3 py-1" : ""
                        }
                    >
                        Home
                    </NavLink></li>

                    <li><NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-red-800 text-white rounded-lg px-3 py-1" : ""
                        }
                    >
                        Donation
                    </NavLink></li>
                    <li><NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-red-800 text-white rounded-lg px-3 py-1" : ""
                        }
                    >
                        Statistics
                    </NavLink></li>
                </ul>
            </div>
        </nav>

        // This is banner section
        
    );
};

export default Header;