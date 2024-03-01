export default function Price({oldPrice,newPrice}){
     let oldstyles ={
        textDecoration:"line-through",
     };
     let newStyles={
        fontWeight:"bold",
     };
     let backGroundStyle={
        backgroundColor:"#c0c672",
        height:"50px",
      
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",
     }; 
    return(
        <div style={backGroundStyle}>
     <span style={oldstyles}>{oldPrice}</span>
     &nbsp;&nbsp;&nbsp;
     <span style={newStyles}>{newPrice}</span>
        </div>
    );
}
