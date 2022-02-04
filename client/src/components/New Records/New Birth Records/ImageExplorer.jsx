import { height, textAlign } from "@mui/system";


const ImageExplorer = () => {
    return(
        <>        
        <div style={{height: "500px", backgroundColor: "#e0e0d1"}}>
        <div style={{textAlign:"center", display: "inline"}}><h5>Image Explorer</h5></div>
        <ul style={{listStyle:"none", position:"absolute",marginLeft:".5rem",paddingLeft:"0"}}>
            <li style={{paddingTop:"15px"}}><i class="fas fa-exchange-alt"></i></li>
            <li style={{paddingTop:"15px"}}><i class="fas fa-plus"></i></li>
            <li style={{paddingTop:"15px"}}><i class="fas fa-minus"></i></li>
            <li style={{paddingTop:"15px"}}><i class="fas fa-arrow-up"></i></li>
            <li style={{paddingTop:"15px"}}><i class="fas fa-arrow-down"></i></li>
            <li style={{paddingTop:"15px"}}><i class="fas fa-redo"></i></li>
        </ul>
          <div style={{ height:"400px",margin:"10px 10px 10px 30px",backgroundColor: "white", borderRadius: "5px"}}>
        
          </div> 
        </div>
        </>
    );
}
export default ImageExplorer