import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startDeleting, startSaveNote, startUploading } from '../../Actions/notes'

const NotesAppBar = () => {

    const dispatch = useDispatch()

    const {active} = useSelector(state => state.notes)

    const handleSaveNote = () => {
        dispatch(startSaveNote(active))
    }

    const handlePicture = () => {
        console.log('entro en el click')
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            dispatch(startUploading(file))
        }
    }

    const handleDelete = () => {
        dispatch(startDeleting(active.id))
    }

    return (
        <div className="notes__appbar">
            <span>8 de Mayo 2021</span>

            <input 
                id='fileSelector'
                type='file'
                name='file'
                style={{ display: 'none' }}
                onChange={ handleFileChange } />

            <div>
                <button onClick={handleDelete} className="btn notes__delete">Delete</button>
                <button onClick={handlePicture} className="btn">Picture</button>
                <button onClick={handleSaveNote} className="btn">Save</button>
            </div>
        </div>
    )
}

export default NotesAppBar
