import React, {useState} from "react";
import App from "./App";
import {Link, withRouter} from "react-router-dom";


function Home(props) {
    const {courses} = props;
    const [currentPage, setCurrentPage] = useState(1)
    const courseAmt = 2;



    return (
        <div >
            {courses
                .filter((el, i) => i >= (currentPage * courseAmt - 2) && i <= (currentPage * courseAmt + courseAmt - 3))
                .map((el) =>
                <Link key={el.id} className="course" to={`/courses/${el.id}`}>
                    {el.name}
                    <br/>
                    {el.description}
                    <br/>
                    {el.price}
                    <br/>
                    {el.date}
                </Link>

            )}
            {/*<button >-></button>*/}
            <button onClick={() => setCurrentPage(prev => prev + 1)}>-></button>
        </div>
    )
}

export default withRouter(Home);