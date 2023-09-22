import { Button } from "@mui/material";

const BasicButton = ({ action, bgColor, textColor, type, name }:
    { action?: any, bgColor?: string, textColor?: string, type?: any, name?: any }) => {
    return (
        <Button
            style={{
                backgroundColor: bgColor ? bgColor : "#0C4A6E",
                color: textColor ? textColor : "text-white",
                marginLeft: 8
            }}
            variant="contained"
            type={type ? type : "button"}
            onClick={action}>
            {name ? name : "button"}
        </Button>)
}
export default BasicButton;