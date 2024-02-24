import "../Components/Card.scss"
import pcimg from "../assets/icons/download 1.png";
import bluedownarrow from "../assets/icons/IMAGE (6).png"
import fivestar from "../assets/icons/IMAGE (5).png";
import fourpointfivestar from "../assets/icons/IMAGE (3).png";
import fourstar from "../assets/icons/IMAGE (4).png";

const Card = () => {
    return (
        <>
            <div className="cardMain">
            <div className="cardBoxNum">
                        1
                    </div>
                <div className="cardBox">
                    
                    <div className="cardBoxSection1">
                        <img src={pcimg} />
                        <div>Builder 1</div>
                    </div>
                    <div className="cardBoxSection2">
                        <div className="cardBoxSection2text one-1"> <b> WixPro 72-Inch Responsive Website Builder- </b>Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</div>
                        <div className="cardBoxSection2text 2"><b>Main highlights</b><br /><br />
                            What You Get: Receive the WixPro website builder suite, access to premium design templates, an extensive library of
                            wiagers ana apps, and detallea step-by-step guldes</div>
                        <div className="cardBoxSection2textblue">
                            <div className="cardBoxSection2textbluetxt">Show more </div>
                            <img src={bluedownarrow} alt="" />
                        </div>
                        <div />
                    </div>
                    <div className="cardBoxSection3">
                        <div className="ratingcardBoxSection3">
                            <div className="ratingcardBoxSection3-1" >9.8</div>
                            <div className="ratingcardBoxSection3-2" >Exceptional</div>
                            <div className="ratingcardBoxSection3-3" ><img src={fivestar} alt="" /></div>
                        </div>
                        <div>
                            <div><button className="btn">View</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card