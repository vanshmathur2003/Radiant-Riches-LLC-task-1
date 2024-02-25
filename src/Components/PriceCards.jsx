import "../Components/PriceCards.scss"
import pcimg from "../assets/icons/download 1.png";

const PriceCards = () => {
  return ( 
    <>
    <div className="Pricecardtitle">Related deals you might like for</div>
    <div className="PricecardHolder">

        <div className="Pricecard">
            <div className="pricecardimg" ><img src={pcimg}/></div>
            <div className="pricecardtxt1">
            <div className="pricecardtxt1-1" >20% Off </div> <div className="pricecardtxt1-1" >Limited time</div></div>
            <div className="pricecardtxt2" > Webbuilder 1</div>
            <div className="pricecardtxt3" >Computer  Modern clasic with wix support</div>
            <div className="pricecardprices">
            <div className="pricecardprice1" >39.96%</div>
            <div className="pricecardprice2" >49.96</div>
            <div className="pricecardprice3" >( 20% Off )</div>
            </div>
            <div className="pricecardtxt4" >View Detail</div>
        </div>
        <div className="Pricecard">
            <div className="pricecardimg" ><img src={pcimg}/></div>
            <div className="pricecardtxt1">
            <div className="pricecardtxt1-1" >20% Off </div> <div className="pricecardtxt1-1" >Limited time</div></div>
            <div className="pricecardtxt2" > Webbuilder 1</div>
            <div className="pricecardtxt3" >Computer  Modern clasic with wix support</div>
            <div className="pricecardprices">
            <div className="pricecardprice1" >39.96%</div>
            <div className="pricecardprice2" >49.96</div>
            <div className="pricecardprice3" >( 20% Off )</div>
            </div>
            <div className="pricecardtxt4" >View Detail</div>
        </div>
        <div className="Pricecard">
            <div className="pricecardimg" ><img src={pcimg}/></div>
            <div className="pricecardtxt1">
            <div className="pricecardtxt1-1" >20% Off </div> <div className="pricecardtxt1-1" >Limited time</div></div>
            <div className="pricecardtxt2" > Webbuilder 1</div>
            <div className="pricecardtxt3" >Computer  Modern clasic with wix support</div>
            <div className="pricecardprices">
            <div className="pricecardprice1" >39.96%</div>
            <div className="pricecardprice2" >49.96</div>
            <div className="pricecardprice3" >( 20% Off )</div>
            </div>
            <div className="pricecardtxt4" >View Detail</div>
        </div>

    </div>
    <div className="Pricecardtitle2">
        <div className="Pricecardtitle2txt1" >Sign up and get exclusive special deals</div>
        <div className="Pricecardtitle2txt2" >Sign up</div>
    </div>
    </>
   )
}

export default PriceCards