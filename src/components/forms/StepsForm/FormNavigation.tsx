import { CircularProgress } from "@mui/material";
import { FormikValues } from "formik";
import React from "react";
import BasicButton from "../../buttons/BasicButton";

interface Props {
    hasPrevious?: boolean;
    onBackClick: (values: FormikValues) => void;
    isLastStep: boolean,
    spinner: boolean,
    onCancel?: any
}

const FormNavigation = (props: Props) => {
    return (
        <div style={{
            textAlign: "right",
            marginTop: "20px"
        }}>
            {/* {props.hasPrevious && ( */}
            <BasicButton
                name={props.hasPrevious ? "Back" : "Cancel"}
                bgColor="#F3F4F6" textColor="rgb(107 114 128)"
                action={props.hasPrevious ? props.onBackClick : props.onCancel} />
            <BasicButton
                name={props.isLastStep ? props.spinner ? <CircularProgress size={20} style={{ color: "#fff" }} /> : "Submit" : "Next"}
                type="submit" />
        </div>
    )
}

export default FormNavigation;