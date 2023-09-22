import BasicForm from "../../components/forms/BasicForm";
import { Grid, MenuItem } from "@material-ui/core";
import InputField from "../../components/inputs/InputField";
import { SelectField } from "../../components/inputs";

const CreateOrUpdate = ({ handleSubmit, handleOpenCloseUserForm, initialState, validationSchema }: any) => {
    return (
        <BasicForm
            onSubmit={handleSubmit}
            onCancel={handleOpenCloseUserForm}
            spinner={false}
            validationSchema={validationSchema}
            initialValues={initialState}
            title="create user">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <InputField
                        name="username"
                        label="Username" />
                    <InputField
                        name="email"
                        label="Email" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectField
                        name="role"
                        label="Role">
                        <MenuItem disabled value="">
                            Select Role
                        </MenuItem>
                        <MenuItem value="user">user</MenuItem>
                        <MenuItem value="admin">admin</MenuItem>
                    </SelectField>
                </Grid>
            </Grid>
        </BasicForm>
    )
}
export default CreateOrUpdate;