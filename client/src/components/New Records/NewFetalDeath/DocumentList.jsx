import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const DocumentList = () => {
    return(
        <>
            <h6 style={{display: "inline"}}>Document List </h6>
            {/* <TextField id="outlined-basic" label="Location" variant="outlined" size='small' style={{display: "inline"}}/> */}
            <input type="text" placeholder="Location" style={{marginLeft: "20px"}}/>
            <Button variant="outlined" size="small" style={{display: "inline", marginLeft: "20px"}}>Show Current</Button>

        </>
    );
}

export default DocumentList