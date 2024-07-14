import { notification } from "antd";
import { Endpoints } from "../../../network/Endpoints";
import { ApiStatus } from "../../../network/constants";
import { RequestMethods, request } from "../../../network/request";
import { updateEnrollmentStatus } from "./slice";

export function registerEnrollment(formData, form) {
  return async function (dispatch) {
    dispatch(updateEnrollmentStatus({ status: ApiStatus.pending }));
    const { success, data } = await request({
      url: Endpoints.enroll,
      method: RequestMethods.POST,
      data: formData,
    });
    if (success) {
      notification.success({
        message: "Thank you",
        description: "Our team will get in touch with you within 24 hours.",
      });
      form.resetFields();
    }
    dispatch(
      updateEnrollmentStatus({
        status: success ? ApiStatus.success : ApiStatus.error,
        message: !success && data,
      })
    );
  };
}
