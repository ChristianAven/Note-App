import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../Actions/notes'
import { useForm } from '../../hooks/useForm'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {

    const dispatch = useDispatch()

    const {active} = useSelector(({notes}) =>notes )
    const [ formValues, handleChange, reset ] = useForm(active)
    const { title, body } = formValues
    const noteUrl = useRef(active.imageUrl)
    const noteId = useRef(active.id)

    
    useEffect(()=>{
        if (active.imageUrl !== noteUrl.current) {
            reset(active); 
            noteUrl.current = active.imageUrl
        }
        if (active.id !== noteId.current) {
            reset(active)
            noteId.current = active.id
        }
    },[active, reset])

    useEffect(() => {
        console.log('entro')
        dispatch(activeNote(formValues.id, {...formValues}))
    }, [formValues,dispatch])


    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">

               <input 
                    className="notes__title-input"
                    type="text"
                    value={title}
                    name='title'
                    autoComplete='off'
                    placeholder="Title"
                    onChange={handleChange} />
                
                <textarea 
                    value={body}
                    name='body'
                    placeholder="What happened today"
                    className="notes__textarea"
                    onChange={handleChange} />
                {
                    active.imageUrl &&
                    <div className="notes__image">
                        <img src={active.imageUrl}
                            alt="imagen"/>
                    </div>
                }
                

            </div>

        </div>
    )
}

export default NoteScreen
