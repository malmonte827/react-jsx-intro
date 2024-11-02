const App = () => {
    return (
        <div>
            <Person
                name="Rick"
                age={55}
                hobbies={["golfing", "partying", "drinking beer"]}
            />
            <Person name="Morty"
             age={13}
              hobbies={["watching tv", "sleeping"]} />
            <Person
                name="beth"
                age={35}
                hobbies={["driving", "singing"]}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"))