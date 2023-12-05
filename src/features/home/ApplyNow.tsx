import React, { useEffect, useState } from "react";
import "./apply-now.scss";
import { applyNowModel } from "./apply-now-model";
import { observer } from "@legendapp/state/react";
import CloseIcon from "@mui/icons-material/Close";
import { observe } from "@legendapp/state";
import CallIcon from '@mui/icons-material/Call';
import { Button, Form, Input, Select } from "antd";

const googleFormLink = "https://forms.gle/iztEBJkwRnJUi64y8";

export const ApplyNow = observer(() => {
  const modalStatus = applyNowModel.status$.get();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const closeModal = () => {
    setErrorMessage(false);
    applyNowModel.actions.toggleModal();
  };

  const onSubmiForm = (userInfo) => {
    // by default the country code should be +91
    !userInfo?.countryCode && (userInfo.countryCode = "+91");
    applyNowModel.actions.submitApplication(userInfo)
  }

  useEffect(() => {
    const submitApiStatus$ = applyNowModel.obsSubmit.apiStatus;
    const formSubmitDisposer = observe(submitApiStatus$, () => {
      let apiStatus = submitApiStatus$.peek();
      if (apiStatus === "pending") {
        setIsLoading(true);
      }
      else if (apiStatus === "success" || apiStatus === "error") {
        setIsLoading(false);
      }
      if (apiStatus === "error") {
        setErrorMessage(true)
      }
    })

    return formSubmitDisposer;
  }, [])

  if (!modalStatus) {
    return null;
  };

  return (
    <div className="modal-right">
      <div className="modal-body">
        <a className="message" href={googleFormLink} target="_blank">If you face any issue in submitting , please try here</a>
        <h3 className="fr-aic g-10 jc-c">
          <CallIcon />
          <span>Request a Callback</span>
        </h3>
        <CloseIcon className="close" onClick={closeModal} />
        <Form title="Request a callback" onFinish={onSubmiForm} layout="vertical">
          <Form.Item className="form-item" label="Name" name="name" rules={[{ required: true, message: "Please enter your fullname" }]}>
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item className="form-item" label="Email" name="email" rules={[{ required: true, message: "Please enter your email address" }]}>
            <Input placeholder="Email" type="email" />
          </Form.Item>
          <Form.Item
            className="form-item"
            name="phoneNumber"
            label="Phone Number"
            rules={[{ required: true, message: 'Please enter phone number' }]}
          >
            <Input
              addonBefore={
                <Form.Item noStyle name="countryCode" >
                  <select value="+91" name="countryCode" required className="select-input">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                  </select>
                </Form.Item>
              } placeholder="Phone Number" pattern="^\d{10}$" />
          </Form.Item>
          {errorMessage && <span className="error">An error occured please fill the form <a href={googleFormLink} target="_blank">Here..</a></span>}
          <Button htmlType="submit" className="submit-btn" block loading={isLoading}>
            Get a Callback
          </Button>
        </Form>
      </div>
    </div >
  );
});
