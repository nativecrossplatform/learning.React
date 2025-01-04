function Promo()
{   const stlpromo = 
    {
            backgroundColor:"green"
    };  
    return (
        <div className='promo-section' style={stlpromo}>
            <div>
            <h1>Don't Miss This Deal</h1>
            </div>
            <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
        </div>
    );
}
export default Promo;