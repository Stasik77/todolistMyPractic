
type ButtonTypeProps = {
    title: string,
}


export const Button = (props:ButtonTypeProps) => {
    return (
        <button>{props.title}</button>
    )
}