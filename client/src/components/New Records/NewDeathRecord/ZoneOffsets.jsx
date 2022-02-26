import { FormLabel } from "@mui/material";
import { display } from "@mui/system";


const ZoneOffsets = () => {
    return(
        <>
        <div style={{height: "40px",backgroundColor: "#e0e0d1",display:"flex",alignItems:"center",paddingLeft:"1rem"}}>
        <div style={{position:"absolute"}}>Zone Offsets:</div>
            <div style={{ paddingLeft:"100px",textAlign:"center",display:"flex"}}>
                
                <label for="" >Left </label>
                <input type="number" placeholder="0"></input>
                <label for="" style={{marginLeft:"10px"}}>  Top:  </label>
                <input type="number" placeholder="0"></input>
            </div>
            </div>
            
        </>
    );
}

export default ZoneOffsets