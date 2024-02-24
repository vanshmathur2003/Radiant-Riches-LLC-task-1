import './Navbar.scss'
const Navbar = () => {
    return (
        <>
            <div className='navbarMain' >
                <input type="text" className='navbarContent-searchbar' placeholder='🔍' />
                <div className='navbarContent' >Categories</div>
                <div className='navbarContent' >Website Builders</div>
                <div className='navbarContent' >Today's deal</div>
            </div>
        </>
    )
}

export default Navbar