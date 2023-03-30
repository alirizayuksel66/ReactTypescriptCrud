import "./EmployeeList.style.css";
import { IEmployee } from "./Employee.type"


type Props = {
    list: IEmployee[]
}
const EmployeeList = (props: Props) => {
    const { list } = props
    return <div>
        <table>
            <tr>
                <th>Adı</th>
                <th>E Posta</th>
                <th>İşlemler</th>
            </tr>
            {list.map((employee) => {
                return (
                    <tr key={employee.id}>
                        <td>{`${employee.firstName} ${employee.lastName}`}</td>
                        <td>{employee.email}</td>
                        <td>
                            <div>
                                <input type="button" value="İncele"/>
                                <input type="button" value="Düzenle"/>
                                <input type="button" value="Sil"/>
                            </div>
                        </td>
                    </tr>
                )
            })}
        </table>
    </div>
}

export default EmployeeList;