export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export const dummyEmployeeList: IEmployee[] = [
    {
        id: new Date().toJSON().toString(),
        firstName: "Ali Rıza",
        lastName: "Yüksel",
        email: "aliriza@gmail.com",
    },
]

export enum PageEnum {
    list,
    add,
    edit
}