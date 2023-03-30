import "./EmployeeList.style.css";
import { IEmployee } from "./Employee.type"
import EmployeeModal from "./EmployeeModal";
import { useState } from "react";


type Props = {
    list: IEmployee[];
    onDeleteClickHnd: (data: IEmployee) => void
}
const EmployeeList = (props: Props) => {
    const { list, onDeleteClickHnd } = props;
    const [showModal, setShowModal] = useState(false)
    const [dataToShow, setDataToShow] = useState(null as IEmployee | null)
    const viewEmployee = (data: IEmployee) => {
        setDataToShow(data)
        setShowModal(true)
    }
    const onCloseModal = () => setShowModal(false);

    return (
        <div>
            <article>
                <h3 className="list-header">Çalışanlar Listesi</h3>
            </article>
            <table>
                <tr>
                    <th>Adı Soyadı</th>
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
                                    <input type="button" value="İncele" onClick={() => viewEmployee(employee)} />
                                    <input type="button" value="Düzenle" />
                                    <input type="button" value="Sil" onClick={() => onDeleteClickHnd(employee)} />
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </table>
            {showModal && dataToShow !== null && <EmployeeModal onClose={onCloseModal} data={dataToShow} />}

        </div>
    )
}

export default EmployeeList;