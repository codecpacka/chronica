import React, { useState } from 'react';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';


const FDRecordF1 = () => {
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
    <TextField id="outlined-basic" label="Record Type: Fetal Death" variant="outlined" size='small'/>
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
const FDRecordF2 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Fetus</h6>
    <TextField id="outlined-basic" label="First Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Middle Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Suffix" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Gender" variant="outlined" size='small'/>
    <TextField id="outlined-basic" type="date"variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Time" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Place Of Delivery" variant="outlined" size='small'/>
    {/* <TextField id="outlined-basic" label="Facility" variant="outlined" size='small'/> */}
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
const FDRecordF3 = () => {
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
    <TextField id="outlined-basic" type="date" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Birth Place" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Country" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Residence" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 1" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 2" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="County" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Zipcode" variant="outlined" size='small'/>
    
    </Box>
  )
}
const FDRecordF4 = () => {
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
    <TextField id="outlined-basic" helpertext="Hispanic Origin" label="If Yes, specify" variant="outlined" size='small'/>
    <TextField id="outlined-basic" helpertext="Race Known" label="If Yes, specify" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Education" variant="outlined" size='small'/>
    
    </Box>
  )
}
const FDRecordF5 = () => {
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
    <TextField id="outlined-basic" type="date" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Birth Place" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="County" variant="outlined" size='small'/>

    </Box>
  )
}
const FDRecordF6 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Disposition 1</h6>
    <TextField id="outlined-basic" label="Disposition Method" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Disposition Date" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Disposition Place" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="License Number" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Location" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 1" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 2" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="County" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Zipcode" variant="outlined" size='small'/>
    </Box>
  )
}
const FDRecordF7 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Disposition 2</h6>
    <TextField id="outlined-basic" label="Funeral Home" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="License Number" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Location" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 1" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 2" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="County" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Zipcode" variant="outlined" size='small'/>
    </Box>
  );
}
const FDRecordF8 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Cirtification</h6>
    <TextField id="outlined-basic" label="Date Signed" variant="outlined" size='small'/>
    <h6 style={{fontWeight: "bold"}}>Attendant</h6>

    <TextField id="outlined-basic" label="Attendant" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Title" variant="outlined" size='small'/>
    <h6 style={{fontWeight: "bold"}}>Certifier</h6>

    <TextField id="outlined-basic" label="Certifier Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Licence Number" variant="outlined" size='small'/>
    <h6 style={{fontWeight: "bold"}}>Health Officer</h6>

    <TextField id="outlined-basic" label="Health Officer" variant="outlined" size='small'/>
    </Box>
  );
}
const FDRecordF9 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Cause of Fetal Death 1</h6>
    <h6 style={{fontWeight: "bold"}}>Part 1</h6>
    <h6 style={{fontWeight: "bold"}}>Initiating Cause of Death</h6>
    <TextField id="outlined-basic" label="a." variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Applies To" variant="outlined" size='small'/>

    </Box>
  );
}
const FDRecord = () => {
  const [page, setPage] = useState(0);

  const formDisplay = () => {
    if(page==0){return <FDRecordF1 />}
    else if(page===1){return <FDRecordF2 />}
    else if(page===2){return <FDRecordF2 />}
    else if(page===3){return <FDRecordF3 />}
    else if(page===4){return <FDRecordF4 />}
    else if(page===5){return <FDRecordF5 />}
    else if(page===6){return <FDRecordF6 />}
    else if(page===7){return <FDRecordF7 />}
    else if(page===8){return <FDRecordF8 />}
    else if(page===9){return <FDRecordF9 />}
  }
  return (
    <>
      {formDisplay()}
      <div>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" size="small" onClick={() => { setPage((page) => page -1) }}disabled={page==0}>Previous</Button>
        <Button variant="outlined" size="small" onClick={() => { setPage((page) => page +1) }}disabled={page==9}>Next</Button>
        <Button variant="outlined" size="small">Preview</Button>
        <Button variant="outlined" size="small">Save</Button>
        <Button variant="outlined" size="small">Close</Button>
      </Stack>
      </div>
    </>
  )
}

export default FDRecord