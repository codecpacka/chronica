import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BRecordF1 from '../../components/New Records/New Birth Records/NewBirthRecordComp';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    // textAlign: 'center',
    color: theme.palette.text.secondary
}));

export default function NewBirthRecord() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={8} container>

                    <Grid item xs={12}>
                        <Item>xs=12</Item>
                    </Grid>

                    <Grid item xs={3}>
                        <Item>xs=3</Item>
                    </Grid>

                    <Grid item xs={9} container direction="column">
                        <Item>xs = 9</Item>
                        {/* <Grid item xs={2}>
                            <Item>xs=2</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>xs=8</Item>
                        </Grid>
                        <Grid item xs={2}>
                            <Item>xs=2</Item>
                        </Grid> */}
                    </Grid>

                </Grid>
                <Grid item xs={4}>
                    <Item> <BRecordF1 /> </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
