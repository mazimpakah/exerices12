import { ERRORS, FIND_ALL_CUSTOMERS, ICustomerType, REGISTER_CUSTOMER } from "./types";

const initialState = {
    customers: [],
    errors: null,
    registerCustomer: null
};

export const customerReducer = (
    state = initialState,
    { type, payload }: ICustomerType
) => {
    switch (type) {
        case ERRORS:
            return { ...state, errors: payload };
        case FIND_ALL_CUSTOMERS:
            return { ...state, customers: payload, registerCustomer: null, errors: null }
        case REGISTER_CUSTOMER:
            return { ...state, registerCustomer: payload, errors: null }
        default:
            return state;
    }
};