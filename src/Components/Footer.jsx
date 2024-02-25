import "../Components/Footer.scss"
import downarrow from "../assets/icons/IMAGE (2).png"

const Footer = () => {
    return (
        <>
            <div className="footerMain">
                <div className="footerMainSection">
                    <div className="footerMainHeading" >Categories</div>
                    <div className="footerMainHeadingtext" >Web Builder</div>
                    <div className="footerMainHeadingtext" >Hosting</div>
                    <div className="footerMainHeadingtext" >Data Center</div>
                    <div className="footerMainHeadingtext" >Robotic-Automation</div>
                </div>
                <div className="footerMainSection" >
                    <div className="footerMainHeading" >Contact</div>
                    <div className="footerMainHeadingtext" >Contact</div>
                    <div className="footerMainHeadingtext" >Privacy Policy</div>
                    <div className="footerMainHeadingtext" >Terms Of Service </div>
                    <div className="footerMainHeadingtext" >Categories</div>
                    <div className="footerMainHeadingtext" >About</div>
                </div>
                <div className="footerMainSectionus">
                    <div className="footerMainHeadingtextus" >United States </div>
                    <img src={downarrow}  />
                   
                </div>

            </div>
        </>
    )
}

export default Footer