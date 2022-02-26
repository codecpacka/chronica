import React, { useState } from 'react';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ARecordF1 = () => {
  return (
    <Box
    component="form"
    sx={{
     '& > :not(style)': { m: 0.5, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    > 
    <h6 style={{fontWeight: "bold"}}>Associate</h6>
    <TextField id="outlined-basic" label="Record Type" variant="outlined" size='small'/>
    <h6 style={{fontWeight: "bold"}}>Document Information</h6>
    <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="First Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Middle Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="Mother Maiden Name" variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="From" type="date"  variant="outlined" size='small'/>
    <TextField id="outlined-basic" label="To" type="date"  variant="outlined" size='small'/>
    <FormGroup>
    <h6 style={{fontWeight: "bold"}}>Record Type </h6>
    <FormControlLabel control={<Checkbox  />} label="Birth" />
    <FormControlLabel control={<Checkbox  />} label="Death" />
    <FormControlLabel control={<Checkbox  />} label="Fetal Death" />

    </FormGroup>

    </Box>
  )
}


const ARecord = () => {
  const [page, setPage] = useState(0);

  const formDisplay = () => {
    if(page==0){return <ARecordF1 />}
  }
  return (
    <>
      {formDisplay()}
      <div>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" size="small">Search</Button>
        <Button variant="outlined" size="small">Clear</Button>
      </Stack>
      </div>
    </>
  )
}

export default ARecord