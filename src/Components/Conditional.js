import { useEffect, useCallback } from "react"

const Conditional = (props) => {

    const colorChecker = useCallback(() => {
        if (props.path.Status === "Critical") {
            return "text red"
        } else if (props.path.Status === "Warning") {
            return "text yellow"
        } else {
            return "text"
        }
    }, [props.path.Status])

    useEffect(() => {
        setInterval(colorChecker, 1800000);
    }, [colorChecker]);

    return(
        <>
            <p className={colorChecker()} >{props.path.Title}</p>
        </>
    )
}

export default Conditional;