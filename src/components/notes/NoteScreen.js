import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">

               <input 
                    className="notes__title-input"
                    type="text"
                    placeholder="Title" />
                
                <textarea 
                    placeholder="What happened today"
                    className="notes__textarea"/>
                
                <div className="notes__image">
                    <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                        alt="imagen"/>
                </div>

            </div>

        </div>
    )
}

export default NoteScreen
