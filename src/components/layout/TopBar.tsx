import { useLocation } from "react-router-dom";

const TopBar = () => {
    const location = useLocation();
    const currentPage = location.pathname.split("/")[1];
    return (
        <div className="bg-white text-gray-500  w-full py-4 px-12 flex items-center justify-between border-b-1 border-b-gray-200">
            <h2 className="capitalize text-lg font-bold">{currentPage}</h2>
            <div className="space-x-5 flex">
                <button className="bg-gray-200 rounded-full p-2 flex items-center justify-center">
                    <i className="fas fa-bell text-gray-500 w-5 h-5"></i>
                </button>
                <button className="bg-gray-200 rounded-full p-2 flex items-center justify-center">
                    <i className="fas fa-user text-gray-500 w-5 h-5"></i>
                </button>
            </div>
        </div>
    )
}
export default TopBar;