export const FIND_ALL_CUSTOMERS = "FIND_ALL_CUSTOMERS";
export const REGISTER_CUSTOMER = "REGISTER_CUSTOMER";
export const ERRORS = "ERRORS";

export interface IErrors {
    status: string;
    timestamp: string;
    message: string;
    error: string;
}

interface ICustomerErrors {
    type: typeof ERRORS;
    payload: {
        errors: IErrors;
    };
}

export interface ICustomer {
    firstName: number;
    lastName: number;
    telephone: number;
    dateOfBirth: string;
    address: number;
}

interface IAllCustomers {
    type: typeof FIND_ALL_CUSTOMERS;
    payload: {
        data: ICustomer;
    };
}

interface IRegisterCustomer {
    type: typeof REGISTER_CUSTOMER;
    payload: {
        data: ICustomer
    }
}

export type ICustomerType = IAllCustomers | ICustomerErrors | IRegisterCustomer