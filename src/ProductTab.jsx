import Product from "./Product.jsx";

function ProductTab(){
  let styles={
     display:"flex",
     flexWrap:"wrap",
     justifyContent:"center",
     alignItem:"center",
  };
    return(
        <div style={styles}>
        <Product title="Logictech Mx Master" idx={0}/>
        <Product title="Apple Pencil(2nd Gen)" idx={1}/>
        <Product title="Zebronics Zeb-tra nsformer" idx={2}/>
        <Product title="Petroonics Toad 23" idx={3}/>
        </div>
     
    );
 }
 export default ProductTab;