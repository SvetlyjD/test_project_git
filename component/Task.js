import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { completedGood, deleteGood } from "../store/taskSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// comment for git
function Task({ title, id, completed }) {
    const dispatch = useDispatch();
    const deleteGoodsOne = () => {
        dispatch(deleteGood(id));
    }
    const completedGoods = () => {
        dispatch(completedGood(id))
    }
    let c;
    let clsName;
    let btnName;

    if (completed === false) { c = "false"; clsName = "trOneTask"; btnName = "taskFalse" }
    else { c = "true"; clsName = "trOneTaskCompleted"; btnName = "taskTrue" }

    return (
        <tr className={clsName} >
            <td style={{ "borderRadius": "10px 0 0 10px", borderColor: 'green' }}><span>{title}</span></td>
            <td className={clsName}>
                <button className={btnName} data-key={id} onClick={() => completedGoods(id)}>{c}</button>
            </td>
            <td className={clsName} style={{ "borderRadius": "0 10px 10px 0" }}>
                <FontAwesomeIcon icon={faTrash} className="iconDel" onClick={() => deleteGoodsOne(id)} />
            </td>

        </tr>
    )
}

export default Task;