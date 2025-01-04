function Intro3() {
    const stlintro3 = {
        backgroundColor:"red"
    }
    return (
        <div className="blog-post-intro" style={stlintro3}>
            <h2>
                What's the best way to style your React apps?
            </h2>
            <div>
                <p>There are so many options to choose from. Here's a high-level overview of the popular ones.</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};
export default Intro3;