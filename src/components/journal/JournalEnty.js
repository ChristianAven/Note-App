import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../Actions/notes';

const JournalEnty = ({ id, date, title, body, imageUrl }) => {

    const dispatch = useDispatch()

    const momentDate = moment(date);

    const note = {
        title: title,
        body: body,
        imageUrl: imageUrl,
        date: date
    }
    console.log('me actualizo')
    const handleEntryClick = () => {dispatch(activeNote(id, note))}

    return (
        <div className="journal__entry" onClick={handleEntryClick}>
            { imageUrl &&
                <div style={{ backgroundSize: 'cover', backgroundImage: `url(${imageUrl})`}} className="journal__entry-picture"></div>
            }
            
            <div className="journal__entry-body">
                <p className="journal__entry-title">{title.length <= 20 ? title : `${title.slice(0,17)}...`}</p>
                <p className="journal__entry-content">{body.length <= 18 ? body : `${body.slice(0,18)}...`}</p>

            </div> 

            <div className="journal__entry-date-box mr-1">
                <span>{momentDate.format('dddd')}</span>
                <h4>{momentDate.format('D')}</h4>
            </div>
        </div>
    )
}

export default JournalEnty
