import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";

type Props = {
    onBackBtnClickHnd: () => void
    onSubmitClickHnd: (data: IEmployee) => void
}

const AddEmployee = (props: Props) => {

    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ email, setEmail ] = useState("")

    const { onBackBtnClickHnd, onSubmitClickHnd } = props;

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
        const data: IEmployee = {
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        onSubmitClickHnd(data);
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
                    <input type="submit" value="Çalışan Ekle" />
                </div>
            </form>
        </div>
    )
}

export default AddEmployee;