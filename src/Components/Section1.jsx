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
                <hr className="section1Line-2" />
                <div className="section1btngrp">
                    <button className="section1btn">Tools</button>
                    <button className="section1btn" >AWS Builder</button>
                    <button className="section1btn">Start Build</button>
                    <button className="section1btn"> Build Supplies</button>
                    <button className="section1btn">Tooling</button>
                    <button className="section1btn">BlueHosting</button>
                </div>
                <div className="section1part2">
                    <p>Home</p><img className="section1part2icon" src={sidearrow} /><p>Hosting for all</p><img className="section1part2icon" src={sidearrow} /><p>Hosting </p><img className="section1part2icon" src={sidearrow} /><p>Hosting 6</p><img className="section1part2icon" src={sidearrow} /><p>Hosting 5</p>
                </div>
            </div>
        </>
    )
}

export default Section1