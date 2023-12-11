import {
  ObservableObject,
  ObservablePrimitive,
  observable,
} from "@legendapp/state";
import { ApiStatus } from "../../network/network.types";
import { RequestMethods, request } from "../../network/request";
import { Endpoints } from "../../network/Endpoints";
import { NotificationInstance } from "antd/es/notification/interface";

class AppyNowModel {
  status$: ObservablePrimitive<boolean>;
  obsSubmit: ObservableObject<{ apiStatus: ApiStatus, errorMessage?: string }>;
  selectedCourse: string;

  constructor() {
    this.status$ = observable<boolean>(false);
    this.obsSubmit = observable({
      apiStatus: "init",
    });
    this.selectedCourse = "DSA";
  }

  private submitApplication = async (data: any, api: NotificationInstance) => {
    data.timestamp = new Date().toISOString();
    this.obsSubmit.apiStatus.set("pending");
    const httpConfig = {
      url: Endpoints.enroll,
      method: RequestMethods.POST,
      data,
    };

    let response = await request(httpConfig);
    if (response.status === "success") {
      this.toggleModal();
      this.obsSubmit.apiStatus.set("success");
      api["success"]({
        message: "Enrollment successful!",
        description: "Thanks for enrolling, our team will get back to you very shortly!",
        placement: "topLeft",
        duration: 100000,
      });
    } else if (response.status === "error") {
      this.obsSubmit.set({
        apiStatus: 'error',
        errorMessage: response.message
      });
      api["error"]({
        message: response.message,
        description: "Please try again....",
        duration: 3000,
        placement: "topLeft"
      });
    }
  };

  private toggleModal = () => {
    this.status$.set((old) => !old);
  };

  actions = {
    toggleModal: this.toggleModal,
    submitApplication: this.submitApplication,
  };
}

export const applyNowModel = new AppyNowModel();
