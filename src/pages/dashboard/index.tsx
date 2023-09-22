import React from "react";
import Card from "./Card";

const Dashboard = () => {
    return (
        <div style={{ height: "50%",  }} className="flex py-8 px-12 space-x-16 ">
            <Card title={"all customers"} number={400} icon={"fas fa-person"} iconBgColor={"bg-yellow-600"} />
            <Card title={"all users"} number={280} icon={"fas fa-user"} iconBgColor={"bg-green-600"} />
        </div>
    )
}

export default Dashboard;