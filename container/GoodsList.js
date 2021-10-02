import React from "react";
import { useSelector } from "react-redux";
import { selectGoods } from "../store/taskSlice";
import Task from "../component/Task"
import { Container, Table } from "react-bootstrap";

const GoodsList = () => {
    let good = useSelector(selectGoods);
    return (

        <Table striped bordered hover variant="dark" className="tableTask">
            <thead>
                <tr className="mt-5">
                    <th className="trTask" style={{ width: 350, backgroundColor: "lightgreen", textAlign: "center" }}>Title</th>
                    <th style={{ width: 110, backgroundColor: "lightgreen", textAlign: "center" }}>Completed</th>
                    <th className="trTaskRight" style={{ width: 110, backgroundColor: "lightgreen", textAlign: "center" }}>Action</th>
                </tr>
            </thead>
            <tbody>

                {good.map(item => <Task title={item.title} id={item.id} completed={item.completed} key={item.id} ></Task>)}

            </tbody>
        </Table>

    );
}

export default GoodsList;