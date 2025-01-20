function Title(props)
{
    const styles = {
        color:"yellow",
        fontWeight:"bolder",
        backgroundColor:"black",
        fontSize:"50px"
    };
    return (<h1 style={styles}>{props.title}</h1>);
}
export default Title;