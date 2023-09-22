import React, { useEffect, useState } from "react";
import { AppState } from "../../store/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { createUser, findAllUsers } from "../../store/user/actions";
import CreateOrUpdate from "./CreateOrUpdate";
import View from "./View";
import * as yup from "yup";
import Toast from "../../components/alerts/Toast";
import { IErrors, IUser } from "../../store/user/types";
import { toast } from 'react-toastify';

const UserList = () => {
    interface IState {
        showTable: boolean
    }

    const dispatch = useDispatch();

    const [state, setState] = useState<IState>({
        showTable: true
    })
    const handleOpenCloseUserForm = () => setState({ ...state, showTable: !state.showTable })

    // columns
    const columns: readonly any[] = [
        {
            id: 'username',
            numeric: false,
            disablePadding: false,
            label: 'Username',
            align: "left"
        },
        {
            id: 'email',
            numeric: false,
            disablePadding: false,
            label: 'Email',
            align: "left"
        },
        {
            id: 'role',
            numeric: false,
            disablePadding: false,
            label: 'Role',
            align: "left"
        },
        {
            id: 'action',
            numeric: false,
            disablePadding: false,
            label: 'Action',
            align: "left"
        }
    ];

    const initialState = {
        username: "",
        email: "",
        role: "",
    };

    // rows
    const { users, createdUser, errors }: { users: any[], createdUser: IUser, errors: IErrors } = useSelector(
        (state: AppState) => state.user
    );

    const handleSubmit = (values:any) => {
        dispatch(createUser(values));
    }

    useEffect(() => {
        dispatch(findAllUsers());
        // eslint-disable-next-line 
    }, [dispatch]);

    useEffect(() => {
        if (createdUser) {
            toast.success("user created successfully");
            dispatch(findAllUsers());
            handleOpenCloseUserForm();
        }
        if (errors) {
            toast.error(errors.message);
        }
        // eslint-disable-next-line 
    }, [createdUser, errors]);

    return (
        <div className="flex py-8 px-12 justify-center">
            <Toast />
            {
                state.showTable ?
                    <View
                        rows={users}
                        columns={columns}
                        handleOpenCloseForm={handleOpenCloseUserForm}
                        actions={<div className='text-2xl'>
                            <i className="fa fa-pencil text-sky-500 font cursor-pointer"></i>
                            <i className='fas fa-trash text-red-500 ml-6 cursor-pointer'></i>
                        </div>} /> :
                    <CreateOrUpdate
                        handleSubmit={handleSubmit}
                        handleOpenCloseUserForm={handleOpenCloseUserForm}
                        initialState={initialState}
                        validationSchema={yup.object({
                            username: yup.string().required("username is required"),
                            email: yup.string().trim().required("email is required").email("invalid email"),
                            role: yup.string().required("role is required"),
                        })} />
            }
        </div>
    )
}

export default UserList;