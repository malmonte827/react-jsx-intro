const Person = ({name, age, hobbies}) =>{
    const vote = age > 18 ? "please go vote!" : "you must be 18"
    const maxNameLength = 8
    const hobbiesArray = hobbies.map(h => <li>{h}</li>)
    return(
        <div>
        <p>Learn some information about this person:</p>
        <ul>
            <li>Name: {name.slice(0, maxNameLength)}</li>
            <li>Age: {age}</li>
        </ul>
        <ul>
            Hobbies: {hobbiesArray}
        </ul>
        <h3>{vote}</h3>
        </div>
    )
}