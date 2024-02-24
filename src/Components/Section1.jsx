import "./Section1.scss"
import info from "../assets/icons/IMAGE (1).png"
import tick from "../assets/icons/IMAGE.png"
import downarrow from "../assets/icons/IMAGE (2).png"
import sidearrow from "../assets/icons/Vector (2).png"
const Section1 = () => {
    return (
        <>
            <div className="section1Main">
                <div className="section1Heading">Best Website Builders in USA</div>
                <hr className="section1Line" />
                <div className="section1part1">
                    <div className="section1part1left">
                        <div>
                            <img className="section1part1icon" src={tick} /><span > Last Updated - February 22, 2020</span>
                        </div>
                        <div>
                            <img className="section1part1icon" src={info} /> <span >Advertising Disclosure</span>
                        </div>
                    </div>

                    <div className="section1part1right">
                        <div>Top Relevent <img className="section1part1icon" src={downarrow} /> </div>
                    </div>
                </div>
                <hr className="section1Line" />
                <div>
                    <button>Tools</button>
                    <button>AWS Builder</button>
                    <button>Start Build</button>
                    <button> Build Supplies</button>
                    <button>Tooling</button>
                    <button>BlueHosting</button>
                </div>

            </div>
        </>
    )
}

export default Section1