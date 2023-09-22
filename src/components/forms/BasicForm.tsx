import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { Typography } from "@mui/material";
import {
  Form,
  Formik,
  FormikConfig,
  FormikHelpers,
  FormikValues,
} from "formik";
import React, { useEffect, useState } from "react";
import BasicButton from "../buttons/BasicButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "72",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    labelContainer: {
      "& $alternativeLabel": {
        marginTop: 0,
      },
    },
    step: {
      "& $completed": {
        color: "rgb(12 74 110)",
      },
      "& $active": {
        color: "rgb(12 74 110)",
      },
      "& $disabled": {
        color: "red",
      },
      "&.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
        color: "rgb(12 74 110)",
      },
      "&.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
        color: "rgb(12 74 110)",
      },
    },
    alternativeLabel: {},
    active: {}, //needed so that the &$active tag works
    completed: {},
    disabled: {},
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  })
);

interface Props extends FormikConfig<FormikValues> {
  children: React.ReactNode;
  spinner: boolean;
  onCancel: any,
  validationSchema: any,
  initialValues: any,
  title: string
}

const BasicForm = ({
  children,
  onSubmit,
  spinner,
  onCancel,
  validationSchema,
  initialValues,
  title
}: Props) => {
  const classes = useStyles();

  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children) as React.ReactElement[];
  const [snapshot, setSnapshot] = useState<any>({});
  const step = steps[stepNumber];

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    return onSubmit(values, actions);
  };

  useEffect(() => {
    if (initialValues) {
      setSnapshot(initialValues);
    }
  }, []);
  return (
    <div className="bg-white rounded border p-4" style={{ width: "100%" }}>
      <Typography
        variant="h6"
        id="tableTitle"
        component="div"
        className='font-bold text-left capitalize'>
        {title}
      </Typography>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        {(formik) => (
          <Form>
            {children}
            <div className="text-right">
              <BasicButton bgColor="#F3F4F6" textColor="rgb(107 114 128)" name="cancel" action={onCancel} />
              <BasicButton type="submit" name="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicForm;