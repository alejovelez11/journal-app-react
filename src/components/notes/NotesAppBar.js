import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'

export const NotesAppBar = () => {
    const dispatch = useDispatch()
    const {active} = useSelector(state => state.notes)
    const handleSave = () => {
        dispatch(startSaveNote(active))
    }

    const handlePicture = () => {
        document.querySelector('#fileSeletor').click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            dispatch(startUploading(file))
        }
    }
    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            <input onChange={handleFileChange} id="fileSeletor" type="file" style={{display: 'none'}}></input>
            <div>
                <button onClick={handlePicture} className="btn">
                    Picture
                </button>

                <button onClick={handleSave} className="btn">
                    Save
                </button>
            </div>
        </div>
    )
}
