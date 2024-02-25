import "../Components/Card1.scss"
import pcimg from "../assets/icons/download 1.png";
import bluedownarrow from "../assets/icons/IMAGE (6).png"
import fivestar from "../assets/icons/IMAGE (5).png";
import fourpointfivestar from "../assets/icons/IMAGE (3).png";
import fourstar from "../assets/icons/IMAGE (4).png";

const Card1 = () => {
    return (
        <>
            <div className="cardMain">
                <div className="cardBoxGood">
                    <div lassName="cardBoxGoodtext" >
                    💎 Best Value
                    </div>
                </div>
                <div className="cardBoxNum">
                    2
                </div>
                <div className="cardBox">

                    <div className="cardBoxSection1">
                        <img className="cardBoxSection1img" src={pcimg} />
                        <div className="cardBoxSection1text">Builder 2</div>
                    </div>
                    <div className="cardBoxSection2">
                        <div className="cardBoxSection2text-1"> <b> SiteCraft 68-Inch Ultimate Web Design Studio-</b>Aavanceo sile I Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</div>
                        <div className="cardBoxSection2text-2"><b>Main highlights</b><br />
                            What You Get: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</div>
                        <div className="cardBoxSection2textblue">
                            <div className="cardBoxSection2textbluetxt">Show more </div>
                            <img src={bluedownarrow} alt="" />
                        </div>
                        <div />
                    </div>
                    <div className="cardBoxSection3">
                        <div className="ratingcardBoxSection3">
                            <div className="ratingcardBoxSection3-1" >9.5</div>
                            <div className="ratingcardBoxSection3-2" >Excellent</div>
                            <div className="ratingcardBoxSection3-3" ><img src={fourpointfivestar} alt="" /></div>
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

export default Card1