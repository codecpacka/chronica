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
    <h6 style={{fontWeight: "bold"}}>Informant</h6>
    <TextField id="outlined-basic" label="First Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Middle Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Suffix" variant="outlined" size='small'/>
    <h6 style={{fontWeight: "bold"}}>Informant</h6>
    <TextField id="outlined-basic" label="Mailing Address" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 1" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 2" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Country" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Zipcode" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Relation" variant="outlined" size='small'/>
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
    <h6 style={{fontWeight: "bold"}}>Disposition 2</h6>
    <TextField id="outlined-basic" label="Funeral Ditector" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="License Number" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Additional Director" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Funeral Home" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="License Number" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Location" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 1" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 2" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Country" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Zipcode" variant="outlined" size='small'/>
    </Box>
  );
}
const DRecordF8 = () => {
    return (
      <Box
      component="form"
      sx={{
       '& > :not(style)': { m: 0.5, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      > 
      <h6 style={{fontWeight: "bold"}}>Cause of Death 1</h6>
      <h6 style={{fontWeight: "bold"}}>Part 1</h6>
      <h6 style={{fontWeight: "bold"}}>Immediate Cause of Death</h6>
      <TextField id="outlined-basic" label="a." variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="Interval" variant="outlined" size='small'/>
      <h6 style={{fontWeight: "bold"}}>Underlying Cause of Death</h6>
      <TextField id="outlined-basic" label="b." variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="Interval of onset" variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="c." variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="Interval of onset" variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="d." variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="Interval of onset" variant="outlined" size='small'/>

      </Box>
    );
  }
const DRecordF9 = () => {
    return (
      <Box
      component="form"
      sx={{
       '& > :not(style)': { m: 0.5, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      > 
      <h6 style={{fontWeight: "bold"}}>Cause of Death 2</h6>
      <h6 style={{fontWeight: "bold"}}>Part 2</h6>
      <TextField id="outlined-basic" label="Other Significant Conditions." variant="outlined" size='small'/>

      <TextField id="outlined-basic" helperText="Cause" label="Mother married to father of this Child" variant="outlined" size='small'/>
      <TextField id="outlined-basic" helperText="Did Tobaco use contribute" label="Mother married to father of this Child" variant="outlined" size='small'/>
      <h6 style={{fontWeight: "bold"}}>If Female</h6>
      <TextField id="outlined-basic" helperText="Was Desdant Pregnamt" variant="outlined" size='small'/>
      <h6 style={{fontWeight: "bold"}}>Autopsy</h6>
      <TextField id="outlined-basic" helperText="Was Autopsy Performed?" variant="outlined" size='small'/>
      <TextField id="outlined-basic" helperText="Was Autopsy findings available prior to completion" variant="outlined" size='small'/>
      </Box>
    );
  }
const DRecordF10 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Cirtifier and Health Officer</h6>
    <h6 style={{fontWeight: "bold"}}>Cirtifier</h6>
    <TextField id="outlined-basic" label="Cirtified As" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Cirtified Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="License Number" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Title" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 1" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Address 2" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Country" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Zipcode" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Date Signed" variant="outlined" size='small'/>
    <h6 style={{fontWeight: "bold"}}>Health Officer</h6>
    <TextField id="outlined-basic" label="Health Officer" variant="outlined" size='small'/>

    </Box>
  );
}

const DRecordF11 = () => {
    return (
      <Box
      component="form"
      sx={{
       '& > :not(style)': { m: 0.5, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      > 
      <h6 style={{fontWeight: "bold"}}>Manner of Death</h6>
      <TextField id="outlined-basic" label="Manner of Death" variant="outlined" size='small'/>
    <TextField id="outlined-basic" type="date" variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="Injury at work" variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="Describe how injury ocuured" variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="Place of Injury" variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="Facility" variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="Address 1" variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="Address 2" variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="City" variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="State" variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="Country" variant="outlined" size='small'/>
      <TextField id="outlined-basic" label="Zipcode" variant="outlined" size='small'/>
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
    else if(page===8){return <DRecordF8 />}
    else if(page===9){return <DRecordF9 />}
    else if(page===10){return <DRecordF10 />}
    else if(page===11){return <DRecordF11 />}
  }
  return (
    <>
      {formDisplay()}
      <div>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" size="small" onClick={() => { setPage((page) => page -1) }}disabled={page==0}>Previous</Button>
        <Button variant="outlined" size="small" onClick={() => { setPage((page) => page +1) }}disabled={page==11}>Next</Button>
        <Button variant="outlined" size="small">Preview</Button>
        <Button variant="outlined" size="small">Save</Button>
        <Button variant="outlined" size="small">Close</Button>
      </Stack>
      </div>
    </>
  )
}

export default DRecord