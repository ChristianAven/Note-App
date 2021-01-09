import React from 'react'
import NoteScreen from '../notes/NoteScreen'
//import NothingSelected from './NothingSelected'
import Sidebar from './Sidebar'

const JournalScreen = () => {
    return (
        <div className="journal__main-conter">
            
            <Sidebar />

            <main>
                {/*<NothingSelected />*/}
                <NoteScreen />
            </main>

        </div>
        )
}

export default JournalScreen