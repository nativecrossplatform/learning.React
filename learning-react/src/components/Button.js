function Button(props)
{
    const styles = {
        border: "2px solid black",
        textAlign: "center",
        fontSize:"30px",
        borderRadius:"14%",
        padding:"30px",
        fontWeight:"bolder",
        backgroundColor:"black",
        color:"yellow",
        borderColor:"yellow",
        margin:"30px"
    }
    return (
        <button id="but" className="but" onClick={props.func} style={styles}>
            {props.nm}
        </button>
    );
}
export default Button;