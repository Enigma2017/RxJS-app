/* eslint-disable react/prop-types */
import { deletePost } from "../store";
export const Card = ({item}) => {
    return (
        <div className="card">
            <h1>{item.title}</h1>
            <div>{item.text}</div>
            <button onClick={() => deletePost(item.id)}>Delete</button>
        </div>
    )
}