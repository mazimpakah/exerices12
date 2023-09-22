export const FIND_ALL_USERS = "FIND_ALL_USERS";
export const CREATE_USER = "CREATE_USER";
export const ERRORS = "ERRORS";

export interface IErrors {
    status: string;
    timestamp: string;
    message: string;
    error: string;
}

interface IUserErrors {
    type: typeof ERRORS;
    payload: {
        errors: IErrors;
    };
}

export interface IUser {
    username: string;
    email: string;
    role: string;
}

interface IAllUsers {
    type: typeof FIND_ALL_USERS;
    payload: {
        data: IUser;
    };
}

interface ICreateUser {
    type: typeof CREATE_USER;
    payload: {
        data: IUser;
    };
}


export type IUserType = IAllUsers | IUserErrors | ICreateUser