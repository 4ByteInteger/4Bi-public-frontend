import React, { useEffect } from "react";
import {
  enrollApiStatusSelector,
  modalStatusSelector,
} from "./redux/selectors";
import { Button, Drawer, Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, resetEnrollModalState } from "./redux/slice";
import { registerEnrollment } from "./redux/thunk";
import { ApiStatus } from "../../network/constants";
import { useForm } from "antd/es/form/Form";

const graduationYears = [
  { label: 2027, value: 2027 },
  { label: 2026, value: 2026 },
  { label: 2025, value: 2025 },
  { label: 2024, value: 2024 },
  { label: 2023, value: 2023 },
  { label: 2022, value: 2022 },
  { label: 2021, value: 2021 },
  { label: 2020, value: 2020 },
];

export const ApplyNowDrawer = () => {
  const [form] = useForm();
  const openModal = useSelector(modalStatusSelector);
  const { enrollmentStatus, errorMessage } = useSelector(
    enrollApiStatusSelector
  );
  const dispatch = useDispatch();

  const onFinish = (formData) => {
    dispatch(registerEnrollment(formData, form));
  };

  useEffect(() => {
    return () => {
      dispatch(resetEnrollModalState());
    };
  }, []);

  return (
    <div>
      <Drawer open={openModal} onClose={() => dispatch(closeModal())}>
        <div style={styles.container}>
          {enrollmentStatus === ApiStatus.error && (
            <p style={{ color: "#FF4D4E" }}>{errorMessage}</p>
          )}
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="fullName"
              label="Full Name"
              rules={[
                { required: true, message: "Please fill your full name" },
              ]}
            >
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email address" },
              ]}
            >
              <Input placeholder="Email Address" />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              name="collegeName"
              label="College Name"
              rules={[
                { required: true, message: "Please fill your college name" },
              ]}
            >
              <Input placeholder="College Name" />
            </Form.Item>
            <Form.Item
              name="graduationYear"
              label="Graduation Year"
              rules={[
                {
                  required: true,
                  message: "Please select your graduation year",
                },
              ]}
            >
              <Select
                placeholder="Select graduation year"
                options={graduationYears}
              />
            </Form.Item>
            <Button
              htmlType="submit"
              block
              style={styles.submitBtn}
              loading={enrollmentStatus === ApiStatus.pending}
            >
              Submit
            </Button>
          </Form>
        </div>
      </Drawer>
    </div>
  );
};

const styles = {
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  submitBtn: {
    backgroundColor: "#1271FF",
    color: "#fff",
    fontWeight: "500",
    height: 40,
    cursor: "pointer",
  },
};
