import React, { useState } from 'react'

const Display = (props) => {

    const handleChecked = (i) => {
        props.onUpdateItem(i)
    }

    const handleDelete = (i) => {
        props.itemDelete(i);
    }

    return (
        <ul class="list-group">
            {
                props.list.map((item, i) => {
                    return (
                        <li className="list-group-item d-flex align-items-center" key={i}>
                            <label
                                className={item.done ? "text-decoration-line-through" : ""}
                            >{item.title}</label>
                            <input
                            className="form-check-input mx-2"
                            type="checkbox"
                            checked={item.done}
                            // onChange works as well
                            onChange={() => handleChecked(i)}/>
                            <button onClick={() => handleDelete(i)} className='btn btn-danger'>Delete</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Display
