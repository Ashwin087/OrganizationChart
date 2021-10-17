import { useEffect } from "react"

const Conditional = (props) => {
    const colorChecker = () => {
        if (props.path.Status === "Critical"){
            return "text red"
        } else if (props.path.Status === "Warning"){
            return "text yellow"
        } else {
            console.log('this work?')
            return "text"
        }
    }

    useEffect(() => {
        setInterval(colorChecker, 180000);
    }, [colorChecker]);

    return(
        <>
            <p className={colorChecker()} >{props.path.Title}</p>
        </>
    )
}

export default Conditional;