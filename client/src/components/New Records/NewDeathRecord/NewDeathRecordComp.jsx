import React, { useState } from 'react';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';


const DRecordF1 = () => {
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
    <TextField id="outlined-basic" label="Record Type: Death" variant="outlined" size='small'/>
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
const DRecordF2 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Decedent 1</h6>
    <TextField id="outlined-basic" label="First Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Middle Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Suffix" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Gender" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Maiden Last Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Time of Death" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Date of Death" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="SSN" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Age of Death" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Calculated Age" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Date of Birth" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Place Of Birth" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="County" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="US Veteran" variant="outlined" size='small'/>
    {/* <h6 style={{fontWeight: "bold"}}> Also Known As</h6>
    <TextField id="outlined-basic" label="First Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Middle Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Suffix" variant="outlined" size='small'/> */}
    </Box>
  )

}
const DRecordF3 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Decedent 2</h6>
    <TextField id="outlined-basic" label="Place of Death" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Facility Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 1" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 2" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="County" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Country" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Zipcode" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Marital Status" variant="outlined" size='small'/>
    <h6 style={{fontWeight: "bold"}}>Surviving Spouse</h6>
    <TextField id="outlined-basic" label="First Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Middle Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Suffix" variant="outlined" size='small'/>

    <TextField id="outlined-basic" label="Occupation" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Industry" variant="outlined" size='small'/>
    </Box>
  )
}
const DRecordF4 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Decedent 3</h6>
    <h6 style={{fontWeight: "bold"}}>Residence</h6>
    <TextField id="outlined-basic" label="Residence" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Country" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="County" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 1" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 2" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Apartment No" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Zipcode" variant="outlined" size='small'/>

    <TextField id="outlined-basic" label="Hispanic Origin" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Specify" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Race Known" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Specify" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Education" variant="outlined" size='small'/>

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
const DRecordF5 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Parents</h6>
    <h6 style={{fontWeight: "bold"}}>Father</h6>
    <TextField id="outlined-basic" label="First Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Middle Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Suffix" variant="outlined" size='small'/>
    <h6 style={{fontWeight: "bold"}}>Mother</h6>
    <TextField id="outlined-basic" label="First Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Middle Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Suffix" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Maiden Name" variant="outlined" size='small'/>
    
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
const DRecordF6 = () => {
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
const DRecordF7 = () => {
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
const DRecord = () => {
  const [page, setPage] = useState(0);

  const formDisplay = () => {
    if(page==0){return <DRecordF1 />}
    else if(page===1){return <DRecordF2 />}
    else if(page===2){return <DRecordF2 />}
    else if(page===3){return <DRecordF3 />}
    else if(page===4){return <DRecordF4 />}
    else if(page===5){return <DRecordF5 />}
    else if(page===6){return <DRecordF6 />}
    else if(page===7){return <DRecordF7 />}
  }
  return (
    <>
      {formDisplay()}
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

export default DRecord