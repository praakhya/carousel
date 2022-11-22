function MyComp(props)
{
    return (
        <div>
            <img src={require(`${props.img}`)} width="100px"/>
            <p>{props.text}</p>
        </div>
    )
}
export default MyComp;