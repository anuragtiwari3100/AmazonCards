import "./Style.css";
import  Price from "./Price.jsx";

function Product({title,idx}){
    let oldPrices=["12,565","2,244","33,523","23,222"];
    let newPrices=["32,552","2,342","2,352","34,354"];
    let description=
    [["8,000 DPI","5 Prograammable buttons"],["intitutive surface","designed for intutive pro"],["designed for intutive pro","intitutive surface"],["wireless","optical-orienatation"]];

    return(
        <div className="Product">
           <h1>{title}</h1> 
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            {/* <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]} /> */}
            <Price  oldPrice={oldPrices[idx]}  newPrice={[newPrices[idx]]}/>
        </div>
    );
}
export default  Product;  