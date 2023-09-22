import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import {
  Form,
  Formik,
  FormikConfig,
  FormikHelpers,
  FormikValues,
} from "formik";
import React, { useEffect, useState } from "react";
import FormNavigation from "./FormNavigation";

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
  onCancel: any
}

const StepsForm = ({
  children,
  initialValues,
  onSubmit,
  spinner,
  onCancel
}: Props) => {
  const classes = useStyles();

  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children) as React.ReactElement[];
  const [snapshot, setSnapshot] = useState<any>({});
  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values: FormikValues) => {
    setSnapshot(values);
    setStepNumber(stepNumber + 1);
  };

  const previous = (values: FormikValues) => {
    setSnapshot(values);
    setStepNumber(stepNumber - 1);
  };

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }
    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
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
        className='font-bold text-left'>
        Register customer
      </Typography>
      <Formik
        enableReinitialize
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.props.validationSchema}>
        {(formik) => (
          <Form>
            <Stepper className="mt-6" activeStep={stepNumber}>
              {steps.map((currentStep) => {
                const label = currentStep.props.stepName;
                return (
                  <Step
                    key={label}
                    classes={{
                      root: classes.step,
                      completed: classes.completed,
                    }}>
                    <StepLabel
                      classes={{
                        alternativeLabel: classes.alternativeLabel,
                        labelContainer: classes.labelContainer,
                      }}
                      StepIconProps={{
                        classes: {
                          root: classes.step,
                          completed: classes.completed,
                          active: classes.active,
                        },
                      }}>
                      {label}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {step}
            <FormNavigation
              spinner={spinner}
              isLastStep={isLastStep}
              hasPrevious={stepNumber > 0}
              onBackClick={() => previous(formik.values)}
              onCancel={onCancel}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StepsForm;

export const FormStep = ({ stepName = "", children }: any) => children;