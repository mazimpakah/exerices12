import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helpers/dispatchHandler";
import {
    CREATE_USER,
    ERRORS,
    FIND_ALL_USERS
} from "./types";
import axios from "../helpers/axiosConfig"

// FIND ALL USERS
export const findAllUsers: any = (): AppThunk => async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch })
    try {
        const url = `/user`;
        const headers = {
            "Content-Type": "application/json",
        };
        const method = "get";
        const { data } = await axios({ method, headers, url });
        if (data) {
            dispatchHandler({
                type: FIND_ALL_USERS,
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

// CREATE USER
export const createUser: any = (info: any): AppThunk => async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch })
    try {
        const url = `/user`;
        const headers = {
            "Content-Type": "application/json",
        };
        const method = "post";
        const { data } = await axios({ method, headers, url, data: info });
        if (data) {
            dispatchHandler({
                type: CREATE_USER,
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