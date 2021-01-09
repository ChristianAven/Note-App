import React from 'react'

const JournalEnty = () => {
    return (
        <div className="journal__entry">
            <div style={{ backgroundSize: 'cover', backgroundImage: 'url(https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg)'}} className="journal__entry-picture"></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title"> Un nuevo dia en EEUU</p>
                <p className="journal__entry-content"> Este es el body de la nota y el usuario puede escribir lo que quiera</p>

            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}

export default JournalEnty
