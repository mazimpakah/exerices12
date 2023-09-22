import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helpers/dispatchHandler";
import {
    ERRORS,
    FIND_ALL_CUSTOMERS,
    ICustomer,
    REGISTER_CUSTOMER
} from "./types";
import axios from "../helpers/axiosConfig"

// FIND ALL CUSTOMERS
export const findAllCustomers: any = (): AppThunk => async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch })
    try {
        const url = `/customer`;
        const headers = {
            "Content-Type": "application/json",
        };
        const method = "get";
        const { data } = await axios({ method, headers, url });
        if (data) {
            dispatchHandler({
                type: FIND_ALL_CUSTOMERS,
                data: data,
                dispatch
            });
        }
    } catch (error: any) {
        if (error) {
            const data = error || error.response;
            return dispatchHandler({
                type: ERRORS,
                data,
                dispatch
            });
        }
    }
}

// CREATE CUSTOMERS
export const registerCustomerAction: any = (information: ICustomer): AppThunk => async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch })
    try {
        const url = `/customer`;
        const headers = {
            "Content-Type": "application/json",
        };
        const method = "post";
        const { data } = await axios({ method, headers, url, data: information });
        if (data) {
            dispatchHandler({
                type: REGISTER_CUSTOMER,
                data: data,
                dispatch
            });
        }
    } catch (error: any) {
        if (error) {
            const data = error.response.data;
            return dispatchHandler({
                type: ERRORS,
                data,
                dispatch
            });
        }
    }
}