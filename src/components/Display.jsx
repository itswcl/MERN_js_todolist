import React from 'react'

const Display = (props) => {

    const handleChecked = (i) => {
        // receive the check action
        // sent the idx to app.js function "onUpdateItem"
        props.onUpdateItem(i)
    }

    const handleDelete = (i) => {
        // received the idx from delete clicked
        // sent to app.js
        props.itemDelete(i);
    }


    return (

        <ul class="list-group">
            {JSON.stringify(props.localStorage)}
            {
                props.list.map((item, i) => {
                    return (
                        <li className="list-group-item d-flex align-items-center" key={i}>
                            <input
                                className="form-check-input mx-2"
                                type="checkbox"
                                // no value for checkbox to set default so we use checked
                                // default as false as the item not done yet
                                checked={item.done}
                                // onClick works on if <checkbox></checkbox>
                                // when the click happen we sent the index to the function
                                onChange={() => handleChecked(i)} />
                            {/* update label based on the checkbox (true/false) */}
                            <label
                                className={item.done ? "text-decoration-line-through" : ""}
                            >{item.title}</label>
                            {/* once the delete click we sent the idx over */}
                            <button onClick={() => handleDelete(i)} className='btn btn-danger'>Delete</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Display
