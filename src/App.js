import './App.css';
import React, {useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from './Home'
import Course from "./Course";

const courseData = [
    {id: 0, name: 'Javascript', description: 'Javascript course', price: 10, date: '1/10/2021'},
    {id: 1, name: 'Python', description: 'Python course', price: 20, date: '1/12/2021'},
    {id: 2, name: 'C#', description: 'C# course', price: 30, date: '1/01/2022'},
    {id: 3, name: 'Javascript', description: 'Javascript course', price: 10, date: '1/10/2021'},
    {id: 4, name: 'Python', description: 'Python course', price: 20, date: '1/12/2021'},
    {id: 5, name: 'C#', description: 'C# course', price: 30, date: '1/01/2022'},
];



function App() {

    const [data, setData] = useState(courseData);


    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>

                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/courses/:courseId">
                        <Course course={data}/>
                    </Route>
                    <Route path="/">
                        <Home courses={data} />
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}


function About() {
    return <h2>About</h2>;
}

export default App;
