const Card = (props:any) => {
    const {title, number, icon, iconBgColor} = props;
    return (
        <div className="flex relative sm:col-12" style={{ height: "210px", width: "350px", minWidth:"100px" }}>
            <div style={{ width: "15%", height: "25%" }} className={`${iconBgColor} rounded border absolute flex justify-center items-center ml-4 shadow-lg`}>
                <i className={`${icon} text-white`}></i>
            </div>
            <div style={{ height: "90%" }} className="w-full p-4 bg-white rounded-lg border self-end">
                <div style={{ height: "60%" }} className=" flex flex-col items-end justify-center">
                    <p className="text-gray-500">{title}</p>
                    <p className="text-lg font-bold">{number}</p>
                </div>
                <hr />
                <div style={{ height: "40%" }} className="flex justify-start items-center text-gray-500">
                    <p> <span className="text-green-500">+55%</span>  <span className="">than lask week</span> </p>
                </div>
            </div>
        </div>

    )
}
export default Card;