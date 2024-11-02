const Tweet =  ({username, name, date, message}) =>{
    return (
        <div className="tweet">
            <p className= "name">{name}</p>
            <p className= "username">{username}</p>
            <p className= "date">{date}</p>
            <p className= "msg">{message}</p>
        </div>
    )
}