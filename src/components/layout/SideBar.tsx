import { Link, useLocation } from "react-router-dom";
import routes from "../../Routes";

const SideBar = () => {
    const history = useLocation();
    return (
        <div className="p-2 bg-sky-900 text-white w-60 flex flex-col md:flex text-center" id="sideNav">
            <div className="text-center py-4">
                <h2 className="font-bold text-xl">D-SACCO</h2>
            </div>
            <hr className="bg-gray-500" />
            <nav>
                {
                    routes.map((route: any, index: number) => {
                        const active = history.pathname === route.path ? true : false;
                        return (
                            route?.visible === false ? null :
                                <Link key={index} className={`flex items-center py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r ${active ? "bg-sky-950" : ""} hover:from-sky-950 hover:to-sky-950 hover:text-white`} to={route.path}>
                                    <i className={`${route.icon} mr-6`}></i><span>{route.name}</span>
                                </Link>
                        )
                    })
                }
            </nav>
            <Link className="flex items-center text-white py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-sky-950 hover:to-sky-950 hover:text-white mt-auto" to="/login">
                <i className="fas fa-sign-out-alt mr-6"></i> <span>Sign out</span>
            </Link>
            <div className="bg-gradient-to-r hover:from-sky-950 hover:to-sky-950 h-px mt-2"></div>
            <p className="mb-1 px-5 py-3 text-left text-xs text-cyan-500">Copyright D-SACCO@2023</p>
        </div>
    )
}

export default SideBar;