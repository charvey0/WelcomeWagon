import React, { useState, useEffect } from "react";
import CardGroup from "./CardGroup"
import API from "../utils/API"

function EmployeesSearchResults (){
    const [employees, setEmployees] = useState([]);
    // const [sortByLast, setSort] = useState(true);

    // function sortEmployees() {
    //     if (sortByLast) {
    //         setSort(false);
    //     } else { 
    //         setSort(true);
    //     }
    //     employees.reverse();
    //     setEmployees(employees);
    //     }


    function handleInputChange(e){
        let userTyped = e.target.value;
        const refineList = employees.filter((emp) => {
          let values =
            emp.name.first +
            emp.name.last +
            emp.email
          return values.indexOf(userTyped) !== -1;
        });
        setEmployees(refineList);
    }




    function loadEmployees(){
        API.search()
            .then((res) => {
                const list = res.data.results.sort(function(x, y) {
                    let a = x.name.last.toUpperCase(),
                        b = y.name.last.toUpperCase();
                    return a === b ? 0 : a > b ? 1 : -1;
                });
                setEmployees(list);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => loadEmployees(), []);

        return (
          <div>
            <form className="d-flex mx-5 ">
                <input
                    onChange={(e) => handleInputChange(e)}
                    className="form-control"
                    type="text"
                    placeholder="Search by first name, last name or email"
                    aria-label="search"
                />
            </form>
            <main className="container">
                    {employees.length > 0 ?
                        (
                                <div>
                                    <CardGroup employees={ employees } />
                                </div>
                        ) : (<h2>No Results</h2>)}
            </main>
          </div>
        )
}

export default EmployeesSearchResults;