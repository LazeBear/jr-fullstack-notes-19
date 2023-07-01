import LinearProgress from '@mui/material/LinearProgress';
const CreateNote = ({textHandler, saveHandler, inputText})=>{
    const charLimit = 100;
    const charLeft = charLimit-inputText.length;
    return(
    <div className="note">
        <textarea
        cols='10'
        rows = '5'
        onChange={textHandler}
        value={inputText}
        placeholder="Type...."
        maxLength='100'
        ></textarea>
        <div className="note__footer">
            <span className="label">{charLeft}</span>
            <button className="note__save" onClick={saveHandler}>Save</button>
        </div>
        <LinearProgress
        className='char__progress'
        variant='determinate'
        value={50}
        />
    </div>
)
    }
export default CreateNote