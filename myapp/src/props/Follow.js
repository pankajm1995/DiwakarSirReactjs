function Follow(props)
{
    return(
        <div className="follow">
            <h1 style={{textAlign:"center"}}>User Name</h1>
            <img src={props.url}
            height={props.height}
            width={props.width}/> 
        </div>
        
        
    )
}
export default Follow