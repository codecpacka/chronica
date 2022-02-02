import React, { useState } from 'react';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';


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
    </Box>
  )
}
const BRecordF2 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Child</h6>
    <TextField id="outlined-basic" label="First Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Middle Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Suffix" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Gender" variant="outlined" size='small'/>
    <TextField id="outlined-basic" type="date"variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Time" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Place Of Birth" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Facility" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 1" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 2" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="County" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Country" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Zipcode" variant="outlined" size='small'/>
    
    </Box>
  )

}
const BRecordF3 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Certifiaction</h6>
    <TextField id="outlined-basic" label="Date Certified" variant="outlined" size='small'/>
    <h6 style={{fontWeight: "bold"}}>Attendant</h6>
    <TextField id="outlined-basic" label="License Number" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Attendant" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Title" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 1" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 2" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="County" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Country" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Zipcode" variant="outlined" size='small'/>
    <h6 style={{fontWeight: "bold"}}>Certifier</h6>
    <TextField id="outlined-basic" label="Certifier Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="License Number" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Title" variant="outlined" size='small'/>
    
    </Box>
  )
}
const BRecordF4 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Mother 1</h6>
    <TextField id="outlined-basic" label="First Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Middle Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Suffix" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Maiden Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" type="date"variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Age" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Calculated Age" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Place Of Birth" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Country" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Residence" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 1" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 2" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Zipcode" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="County" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
    
    </Box>
  )
}
const BRecordF5 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Mother 2</h6>
    <TextField id="outlined-basic" label="Mailing Address" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 1" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 2" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Country" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Zipcode" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="SSN" variant="outlined" size='small'/>
    </Box>
  )
}
const BRecordF6 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Father</h6>
    <TextField id="outlined-basic" label="First Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Middle Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Suffix" variant="outlined" size='small'/>
    <TextField id="outlined-basic" type="date"variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Age" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Calculated Age" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Place Of Birth" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Country" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="SSN" variant="outlined" size='small'/>  
    </Box>
  )
}
const BRecordF7 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Other Details</h6>
    <TextField id="outlined-basic" helperText="Permission Given to provide social security administration with data for purpose of issuing SSN" label="Yes or No" variant="outlined" size='small'/>
    <h6 style={{fontWeight: "bold"}}>For Office Use</h6>
    <TextField id="outlined-basic" helperText="" label="Adoption " variant="outlined" size='small'/>
    <TextField id="outlined-basic" helperText="Mother married to father of this Child" label="Mother married to father of this Child" variant="outlined" size='small'/>

    <TextField id="outlined-basic" label="Baby died before discharge" variant="outlined" size='small'/>
    <TextField id="outlined-basic" type="date" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Plurality" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Plurality Sequence" variant="outlined" size='small'/>
    </Box>
  );
}
const BRecord = () => {
  const [page, setPage] = useState(0);

  const formDisplay = () => {
    if(page==0){return <BRecordF1 />}
    else if(page===1){return <BRecordF2 />}
    else if(page===2){return <BRecordF2 />}
    else if(page===3){return <BRecordF3 />}
    else if(page===4){return <BRecordF4 />}
    else if(page===5){return <BRecordF5 />}
    else if(page===6){return <BRecordF6 />}
    else if(page===7){return <BRecordF7 />}
  }
  return (
    <>
      <div>{formDisplay()}</div>
      <div>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" size="small" onClick={() => { setPage((page) => page -1) }}disabled={page==0}>Previous</Button>
        <Button variant="outlined" size="small" onClick={() => { setPage((page) => page +1) }}disabled={page==7}>Next</Button>
        <Button variant="outlined" size="small">Preview</Button>
        <Button variant="outlined" size="small">Save</Button>
        <Button variant="outlined" size="small">Close</Button>
      </Stack>
      </div>
    </>
  )
}

export default BRecord