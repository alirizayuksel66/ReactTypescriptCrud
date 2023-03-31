import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";

type Props = {
    data: IEmployee
    onBackBtnClickHnd: () => void
    onUpdateClickHnd: (data: IEmployee) => void
}

const EditEmployee = (props: Props) => {
    const { data, onBackBtnClickHnd, onUpdateClickHnd } = props

    const [firstName, setFirstName] = useState(data.firstName)
    const [lastName, setLastName] = useState(data.lastName)
    const [email, setEmail] = useState(data.email)

    const onFirstNameChangeHnd = (e: any) => {
        setFirstName(e.target.value)
    }
    const onLastNameChangeHnd = (e: any) => {
        setLastName(e.target.value)
    }
    const onEmailChangeHnd = (e: any) => {
        setEmail(e.target.value)
    }

    const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const Updatedata: IEmployee = {
            id: data.id,
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        onUpdateClickHnd(Updatedata);
        onBackBtnClickHnd();
    }

    return (
        <div className="form-container">
            <div>
                <h3>Çalışan Ekleme Formu</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div>
                    <label>Adı : </label>
                    <input type="text" value={firstName} onChange={onFirstNameChangeHnd} />
                </div>
                <div>
                    <label>Soyadı : </label>
                    <input type="text" value={lastName} onChange={onLastNameChangeHnd} />
                </div>
                <div>
                    <label>E Posta : </label>
                    <input type="text" value={email} onChange={onEmailChangeHnd} />
                </div>
                <div>
                    <input type="button" value="Geri" onClick={onBackBtnClickHnd} />
                    <input type="submit" value="Çalışan Düzenle" />
                </div>
            </form>
        </div>
    )
}

export default EditEmployee