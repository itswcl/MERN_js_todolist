import React, { useState } from 'react'

const FormAdd = (props) => {
    const [item, setItem] = useState({
        title: "",
        done: false,
    })

    const addItem = (e) => {
        setItem({
            title: e.target.value,
            done: false,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewItem(item.title, item.done)
        setItem({
            ...item,
            title: ""
        })
    }

    return (
        <div className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit} className='form-group'>
                <div className='col'>
                    <labe>Enter Item</labe>
                    <input
                    onChange={addItem}
                    className='form-control'
                    type='text'
                    name='title'
                    value={item.title}
                    />
                </div>
                <button className="btn btn-success my-2">Add</button>
            </form>
        </div>
    )
}

export default FormAdd
