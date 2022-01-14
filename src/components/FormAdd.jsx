import React, { useState } from 'react'

const FormAdd = (props) => {
    // set item with default false done
    const [item, setItem] = useState({
        title: "",
        done: false,
    })

    // add item to set new item asa object
    const addItem = (e) => {
        setItem({
            title: e.target.value,
            done: false,
        })
    }

    // once submit
    const handleSubmit = (e) => {
        // prevent refresh
        e.preventDefault();
        // call the function from app.js file to add to main list
        props.onNewItem(item.title, item.done)
        // clear out the input
        setItem({
            ...item,
            title: ""
        })
    }

    return (
        <div className='d-flex justify-content-center'>
            {/* handle the submit once submit */}
            <form onSubmit={handleSubmit} className='form-group'>
                <div className='col'>
                    <labe>Enter Item</labe>
                    <input
                    // when input change to the item and click add item
                    onChange={addItem}
                    className='form-control'
                    type='text'
                    name='title'
                    // default value as empty and update once type in
                    value={item.title}
                    />
                </div>
                <button className="btn btn-success my-2">Add</button>
            </form>
        </div>
    )
}

export default FormAdd
