import { IEmployee } from "./Employee.type";
import "./EmployeeModal.style.css";

type Props = {
    onClose: () => void
    data: IEmployee
}

const EmployeeModal = (props: Props) => {
    const { onClose, data } = props
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose} >&times;</span>
                <div>
                    <h1>Çalışan Bilgisi</h1>
                    <div>
                        <div>
                            <label>Adı : {data.firstName}</label>
                        </div>
                        <div>
                            <label>Soyadı : {data.lastName}</label>
                        </div>
                        <div>
                            <label>E Posta : {data.email}</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EmployeeModal;