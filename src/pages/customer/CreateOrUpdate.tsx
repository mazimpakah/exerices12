import StepsForm, { FormStep } from "../../components/forms/StepsForm";
import InputField from "../../components/inputs/InputField";
import * as yup from "yup";
import Grid from '@mui/material/Grid';

const CreateOrUpdate = ({ handleOpenCloseCustomerForm, spinner, initialState, handleSubmit }: any) => {
    return (
        <StepsForm
            onCancel={handleOpenCloseCustomerForm}
            spinner={spinner}
            initialValues={initialState}
            onSubmit={(values) => handleSubmit(values)}>
            {/* ================================================Basic================================ */}
            <FormStep
                stepName="Basic"
                onSubmit={() => console.log("step 1")}
                validationSchema={yup.object({
                    firstName: yup.string().required("First name is required"),
                    lastName: yup.string().required("Last name is required"),
                    telephone: yup.string().required("Telephone is required"),
                })}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <InputField
                            name="firstName"
                            label="First name"
                        />
                        <InputField
                            name="telephone"
                            label="Telephone"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputField
                            name="lastName"
                            label="Last name"
                        />
                    </Grid>
                </Grid>
            </FormStep>

            {/* ================================================others================================ */}
            <FormStep
                stepName="Other"
                onSubmit={() => console.log("step2")}
                validationSchema={yup.object({
                    address: yup.string().required("address is required"),
                    dateOfBirth: yup.string().trim(),
                })}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <InputField
                            name="address"
                            label="Address"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputField
                            name="dateOfBirth"
                            label="Date of birth"
                            type="date"
                        />
                    </Grid>
                </Grid>
            </FormStep>
        </StepsForm>
    )
}
export default CreateOrUpdate;