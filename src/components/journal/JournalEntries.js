import React from 'react'
import { useSelector } from 'react-redux';
import JournalEnty from './JournalEnty';

const JournalEntries = () => {

    const {notes} = useSelector(({notes}) => notes )
    console.log(notes)
    return (
        <div className="journal__entries">
            {
                notes.map(note => ( 
                    <JournalEnty 
                        key={note.id}
                        {...note} />))
            }
        </div>
    )
}

export default JournalEntries
