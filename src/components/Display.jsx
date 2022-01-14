import React, { useState } from 'react'

const Display = (props) => {
    return (
        <ul class="list-group">
            {
                props.list.map((item, i) => {
                    return (
                        <li className="list-group-item" key={i}>
                            <label>{item.title}</label>
                            <input className="form-check-input" type="checkbox" checked={item.done} />
                            <button className='btn btn-danger'>Delete</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Display
