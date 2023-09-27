import { NavLink, } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <nav className="flex-row lg:flex justify-between items-center py-3 shadow-lg">
                {/* Here is NavBar image part work */}
                <div>
                    <img className="w-36" src="./../../../public/assets/Logo.png" alt="" />
                </div>

                {/* Here is NavBar list part work */}
                <div>
                    <ul className="flex mt-3 gap-5 md:mt-0">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-red-800 text-white rounded-lg px-3 py-1" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-red-800 text-white rounded-lg px-3 py-1" : ""
                                }
                            >
                                Donation
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-red-800 text-white rounded-lg px-3 py-1" : ""
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Header;