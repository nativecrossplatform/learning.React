import react,{ useState } from "react";
function Button(props)
{
    const [clr,chng_clr] = useState("black")
    const chn_clr = () => {
        if(props.nm=="Increment")
        {
        chng_clr("green")
        }
        else{
        chng_clr("red")    
        }
    }
    const og_color = () => {chng_clr("black")}
    const styles = {
        border: "2px solid black",
        textAlign: "center",
        fontSize:"30px",
        borderRadius:"14%",
        padding:"30px",
        fontWeight:"bolder",
        backgroundColor:clr,
        color:"yellow",
        borderColor:"yellow",
        margin:"30px"
    }
    return (
        <button id="but" className="but" onClick={props.func} style={styles} onMouseOver={chn_clr} onMouseOut={og_color}>
            {props.nm}
        </button>
    );
}
export default Button;