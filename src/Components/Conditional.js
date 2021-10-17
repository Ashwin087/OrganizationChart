import { useEffect, useCallback } from "react"

const Conditional = (props) => {

    const statusChecker = useCallback(() => {
        if (props.path.Status === "Critical") {
            return "text red"
        } else if (props.path.Status === "Warning") {
            return "text yellow"
        } else {
            return "text"
        }
    }, [props.path.Status])

    useEffect(() => {
        setInterval(statusChecker, 1800000);
    }, [statusChecker]);

    return(
        <>
            <p className={statusChecker()} >{props.path.Title}</p>
        </>
    )
}

export default Conditional;