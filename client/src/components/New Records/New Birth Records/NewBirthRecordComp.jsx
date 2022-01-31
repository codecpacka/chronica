import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';

const BtnBRecord = () => {
  return(
    <>
      <Button variant="outlined" size="small">Previous</Button>
      <Button variant="outlined" size="small">Next</Button>
      <Button variant="outlined" size="small">Preview</Button>
      <Button variant="outlined">Save</Button>
      <Button variant="outlined" size="small">Close</Button>
    </>
  ); 
} 

const BRecordF1 = () => {
    return (
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0.5, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    > 
      <h6 style={{fontWeight: "bold"}}>Record Information</h6>
      <TextField id="outlined-basic" label="Record Type" variant="outlined" size='small'/>
      <h6 style={{fontWeight: "bold"}}>Document Information</h6>
      <TextField id="outlined-basic" label="Format" variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="Location" variant="outlined" size='small'/>
      <TextField id="outlined-basic" type="date" variant="outlined" size='small'/>
      <h6 style={{fontWeight: "bold"}}>Registration Information</h6>
      <TextField id="outlined-basic" label="Local No" variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="State No" variant="outlined" size='small'/>
      <TextField id="outlined-basic" type="date" variant="outlined" size='small'/>
      <TextField id="outlined-multiline-static" label="Comments" multiline rows={4}  defaultValue="Comment"/>

      <BtnBRecord/>
    </Box>
    );
}

export default BRecordF1