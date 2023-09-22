import { withStyles } from "@material-ui/core";
import { TextField } from "@mui/material"
import { FieldConfig, useField } from "formik"

const CssTextField: any = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "rgb(12 74 110)",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "rgb(12 74 110)",
        },
        "& .MuiOutlinedInput-root": {
            //   "& fieldset": {
            //     borderColor: "red",
            //   },
            // "&:hover fieldset": {
            //   borderColor: "yellow",
            // },
            "&.Mui-focused fieldset": {
                borderColor: "rgb(12 74 110)",
            },
        },
    },
})(TextField);

interface Props extends FieldConfig {
    label: string,
    value?: any,
    onChange?: any,
    disabled?: boolean,
    onKeyPress?: any
    name: string
}

const InputField = ({ onKeyPress, label, value, disabled, onChange, ...props }: Props) => {

    const [field, meta] = useField(props?.name);

    return (
        <CssTextField
            margin="normal"
            size="small"
            fullWidth
            label={label}
            disabled={disabled}
            {...field}
            {...props}
            onKeyPress={onKeyPress}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
        />
    );
}

export default InputField;