import Products from "../products/Products";
import './items.css';


function Items(props) {
    return (
        <div className="content">
            <img src={props.data.image} />
            <h3>{props.data.name}</h3>
            <p>{props.data.desc}</p>
            <h6>{props.data.price}</h6>
            <ul>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star"></i></li>
            </ul>
            <button className="buy-1" onClick={buyNow}>Buy Now</button>

        </div>

        
    );

}

function buyNow(){
    alert('Please add money for buying this food'); 
}



export default Items;