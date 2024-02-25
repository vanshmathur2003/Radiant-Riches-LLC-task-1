import "../Components/Card3.scss"
import pcimg from "../assets/icons/download 1.png";
import bluedownarrow from "../assets/icons/IMAGE (6).png"
import fivestar from "../assets/icons/IMAGE (5).png";
import fourpointfivestar from "../assets/icons/IMAGE (3).png";
import fourstar from "../assets/icons/IMAGE (4).png";

const Card3 = () => {
    return (
        <>
            <div className="card3Main">
                
                <div className="cardBoxNum">
                    4
                </div>
                <div className="cardBox">

                    <div className="cardBoxSection1">
                        <img className="cardBoxSection1img" src={pcimg} />
                        <div className="cardBoxSection1text">CDK</div>
                    </div>
                    <div className="cardBoxSection2">
                        <div className="cardBoxSection2text-1"> <b> CDK Resposive Builder: </b>An extensive library of widgets and apps, and detailed step-by-step guides</div>
                        <div className="cardBoxSection2discount">26% Off</div>
                        <div className="cardBoxSection2text-2"><b>Main highlights</b><br />
                        <div className="cardBoxSection2listparent">
                            <div className="cardBoxSection2textlist" >9.9  Building Responsive</div>
                            <div className="cardBoxSection2textlist" >8.9  Cool</div>
                            <div className="cardBoxSection2textlist" >8.9  Docs</div>
                            </div>
                            <div className="cardBoxSection2list2parent"><b>Why we love it</b>
                            <div className="cardBoxSection2textlist2" >✅ Documentaton</div>
                            <div className="cardBoxSection2textlist2" >✅  Easy use</div>
                            <div className="cardBoxSection2textlist2" >✅  Out of box</div>
                            </div>
                            </div>
                        <div className="cardBoxSection2textblue">
                            <div className="cardBoxSection2textbluetxt">Show more </div>
                            <img src={bluedownarrow} alt="" />
                        </div>
                        <div />
                    </div>
                    <div className="cardBoxSection3">
                        <div className="ratingcardBoxSection3">
                            <div className="ratingcardBoxSection3-1" >9.1</div>
                            <div className="ratingcardBoxSection3-2" >Very Good</div>
                            <div className="ratingcardBoxSection3-3" ><img src={fourstar} alt="" /></div>
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

export default Card3