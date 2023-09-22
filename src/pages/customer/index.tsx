import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllCustomers, registerCustomerAction } from "../../store/customer/actions";
import { AppState } from "../../store/configureStore";
import Toast from "../../components/alerts/Toast";
import { toast } from 'react-toastify';
import CreateOrUpdate from "./CreateOrUpdate";
import View from "./View";

const CustomerList = () => {
    interface IState {
        showTable: boolean,
        spinner: boolean
    }
    const [state, setState] = useState<IState>({
        showTable: true,
        spinner: false
    })
    const handleOpenCloseCustomerForm = () => setState({ ...state, showTable: !state.showTable });

    const initialState = {
        firstName: "",
        lastName: "",
        telephone: "",
        address: "",
        dateOfBirth: ""
    };

    // columns
    const columns: readonly any[] = [
        {
            id: 'firstName',
            numeric: false,
            disablePadding: false,
            label: 'First Name',
            align: "left"
        },
        {
            id: 'lastName',
            numeric: false,
            disablePadding: false,
            label: 'Last Name',
            align: "left"
        },
        {
            id: 'telephone',
            numeric: false,
            disablePadding: false,
            label: 'Telephone',
            align: "left"
        },
        {
            id: 'dateOfBirth',
            numeric: false,
            disablePadding: false,
            label: 'Date of Birth',
            align: "left",
            type: "date"
        },
        {
            id: 'address',
            numeric: false,
            disablePadding: false,
            label: 'Address',
            align: "left"
        },
        {
            id: 'action',
            numeric: false,
            disablePadding: false,
            label: 'Action',
            align: "left"
        },
    ];

    // store
    const { customers, registerCustomer, errors }: { customers: any[], registerCustomer: any, errors:any } = useSelector(
        (state: AppState) => state.customer
    );

    // handle submit
    const handleSubmit = (values: any) => {
        dispatch(registerCustomerAction(values));
        dispatch(findAllCustomers());
        handleOpenCloseCustomerForm();
    }

    // handle delete
    const handleDelete: any = (id: string) => {
        console.log("id --------- ", id);
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllCustomers());
        // eslint-disable-next-line 
    }, [dispatch]);

    useEffect(() => {
        if (registerCustomer) {
            toast.success("customer registed successfully");
            dispatch(findAllCustomers());
            setState({ ...state, showTable: !state.showTable })
        }
        if (errors) {
            toast.error(errors.message);
        }
        // eslint-disable-next-line 
    }, [registerCustomer, errors]);

    return (
        <div className="flex py-8 px-12 justify-center">
            <Toast />
            {
                state.showTable ?
                    <View
                        rows={customers}
                        columns={columns}
                        handleOpenCloseCustomerForm={handleOpenCloseCustomerForm}
                        actions={
                            <div className='text-2xl'>
                                <i onClick={handleDelete} className="fa fa-pencil text-sky-500 font cursor-pointer"></i>
                                <i className='fas fa-trash text-red-500 ml-6 cursor-pointer'></i>
                            </div>} /> :
                    <CreateOrUpdate
                        handleOpenCloseCustomerForm={handleOpenCloseCustomerForm}
                        spinner={state.spinner}
                        initialValues={initialState}
                        handleSubmit={handleSubmit} />
            }
        </div>
    )
}

export default CustomerList;