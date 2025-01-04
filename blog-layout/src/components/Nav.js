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
            <a href=''>Home</a> <a href=''>Articles</a> <a href=''>About</a> <a href=''>Contact</a> 
        </nav>
    );
}
export default Nav;