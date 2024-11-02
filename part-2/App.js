const App = () =>{
    return(
        <div>
        <Tweet 
        name="Bill"
        username="Billz"
        date="10/31/24"
        message="heyyyyyy"/>
        <Tweet 
        name="livley"
        username="lora"
        date="10/31/24"
        message="sup"/>
        <Tweet 
        name="Cipher"
        username="cipherzz"
        date="10/31/24"
        message="whats up"/>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))