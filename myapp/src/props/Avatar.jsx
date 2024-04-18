function Avatar(props)

{
    console.log(props)
    return(
        <div>
            <img
            src={props.url}
            height={props.height}
            width={props.width}
            
            />
            <h3>{props.name}</h3>
        </div>
    )
}
export default Avatar