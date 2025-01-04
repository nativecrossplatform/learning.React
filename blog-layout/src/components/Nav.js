function Nav()
{
    const stlnav = 
    {
        color: "red",
        fontsize: "40px",
        backgroundColor: "yellow"
    };
    return (
        <nav className='main-nav' style={stlnav}>
            <ul>
                <li>
                Home
                </li>
                <li>
                Articles
                </li>
                <li>
                About
                </li>
                <li>
                Contact
                </li>
            </ul>
        </nav>
    );
}
export default Nav;