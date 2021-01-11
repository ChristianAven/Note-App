import React from 'react'
import { useSelector } from 'react-redux'
import NoteScreen from '../notes/NoteScreen'
import NothingSelected from './NothingSelected'
import Sidebar from './Sidebar'

const JournalScreen = () => {

    const notes = useSelector(({notes}) => notes )

    return (
        <div className="journal__main-conter">
            
            <Sidebar />

            <main>
                {
                    notes.active 
                    ? (<NoteScreen />)
                    : (<NothingSelected />)
                }
                
            </main>

        </div>
        )
}

export default JournalScreen
