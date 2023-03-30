import { useState } from "react";
import AddEmployee from "./AddEmployee";
import { IEmployee, dummyEmployeeList, PageEnum } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import "./Home.style.css";

const Home = () => {

    const [employeeList, setEmployeeList] = useState(dummyEmployeeList as IEmployee[]);

    const [shownPage, setShownPage] = useState(PageEnum.list)

    return <>
        <article className="article-header">
            <header>
                <h1>React: Crud Çalışması</h1>
            </header>
        </article>

        <section className="section-content">
            {shownPage === PageEnum.list && (
                <>
                    <input type="button" value="Çalışan Ekle" />
                    <EmployeeList list={employeeList} />
                </>
            )}

            {shownPage === PageEnum.add && <AddEmployee />}
        </section>
    </>
}

export default Home;