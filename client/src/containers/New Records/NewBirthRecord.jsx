import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BRecord from '../../components/New Records/New Birth Records/NewBirthRecordComp';
import DocumentList from '../../components/New Records/New Birth Records/DocumentList'
import ImageExplorer from '../../components/New Records/New Birth Records/ImageExplorer'
import IconBar from '../../components/New Records/New Birth Records/IconBar'
import ImageWindow from '../../components/New Records/New Birth Records/ImageWindow'
import ZoneOffsets from '../../components/New Records/New Birth Records/ZoneOffsets';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function NewBirthRecord() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid style={{display: "table"}} container spacing={1}>
                <Grid item xs={8} style={{display: "inline-flex"}} container>

                    <Grid item xs={12}>
                        <Item> <DocumentList /> </Item>
                    </Grid>

                    <Grid item xs={3}>
                        <Item><ImageExplorer/></Item>
                    </Grid>

                    <Grid item xs={9} container direction="column" style={{display: "table"}}>
                        {/* <Item>xs = 9</Item> */}
                        <Grid item xs={2}>
                            <Item><IconBar /></Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item><ImageWindow /></Item>
                        </Grid>
                        <Grid item xs={2}>
                            <Item><ZoneOffsets /></Item>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={4} style={{display: "inline-flex"}}>
                    <Item> <BRecord /> </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
