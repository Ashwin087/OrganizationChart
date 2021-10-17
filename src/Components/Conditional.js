const Conditional = (props) => {

    // console.log(props.path.Status)

    const colorChecker = () => {
        if (props.path.Status === "Critical"){
            return "text red"
        } else if (props.path.Status === "Warning"){
            return "text yellow"
        } else {
            return "text"
        }
    }
    // colorChecker();
    return(
        <>
            <p className={colorChecker()} >{props.path.Title}</p>
        </>
    )
}

export default Conditional;