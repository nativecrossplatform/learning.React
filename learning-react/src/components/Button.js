function Button(props)
{
    return (
        <button id="but" className="but" onClick={props.func}>
            {props.nm}
        </button>
    );
}
export default Button;