import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../Actions/auth'
import { startNewNote } from '../../Actions/notes'
import JournalEntries from './JournalEntries'

const Sidebar = () => {

    const dispatch = useDispatch()
    const state = useSelector(({auth}) => auth)

    const handleLogout = () => {
        dispatch(startLogout())
    }

    const handleNewNote = () => {
        dispatch( startNewNote())
    }

    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar-navbar">

                <h3 className="mt-5">
                    <i className="far fa-moon mr-1"></i>
                    <span>{state.name.split(" ")[0]}</span>
                </h3>

                <button className="btn" onClick={handleLogout}>
                    logout
                </button>

            </div>

            <div onClick={handleNewNote} className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">New entry</p>
            </div>

            <JournalEntries />

        </aside>
    )
}

export default Sidebar
