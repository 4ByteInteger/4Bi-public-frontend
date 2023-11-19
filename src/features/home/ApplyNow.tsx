import React, { useEffect, useRef, useState } from "react";
import "./apply-now.scss";
import { applyNowModel } from "./apply-now-model";
import { observer } from "@legendapp/state/react";
import CloseIcon from "@mui/icons-material/Close";
import { Spinner } from "../../components/loaders/spinner";
import { observe } from "@legendapp/state";
import CallIcon from '@mui/icons-material/Call';

export const ApplyNow = observer(() => {
  const modalStatus = applyNowModel.status$.get();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef(null);
  const [selectedCourse, setSelectedCourse] = useState(applyNowModel.selectedCourse);

  const closeModal = () => {
    setErrorMessage('');
    applyNowModel.actions.toggleModal();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const name = formRef.current["name"].value;
    const email = formRef.current["email"].value;
    const phone = formRef.current["phone"].value;
    const course = formRef.current["course"].value;
    const branch = formRef.current["branch"].value;
    const stream = formRef.current["stream"].value;
    const college = formRef.current["college"].value;

    const countryCode = "+91";

    let formData = { name, phone, email, countryCode, course, college, stream, branch };
    applyNowModel.actions.submitApplication(formData);
  };

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage('');
      }, 5000)
    }
  }, [errorMessage])

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
        setErrorMessage(applyNowModel.obsSubmit?.errorMessage?.peek?.())
      }
    })

    return () => {
      formSubmitDisposer();
    }
  }, [])

  if (!modalStatus) {
    return null;
  };

  return (
    <div className="modal-right">
      <div className="modal-body">
        <h3 className="fr-aic g-10 jc-c">
          <CallIcon />
          <span>Request a Callback</span>
        </h3>
        <CloseIcon className="close" onClick={closeModal} />
        <form className="form" ref={formRef} onSubmit={onSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input name="email" className="input" type="email" required placeholder="Email" />
          <div className="fr-aic g-10">
            <input type="button" className="prefix input" value="+91" disabled />
            <input
              pattern="^\d{10}$"
              title="enter a valid 10 digit number"
              name="phone"
              className="input phone"
              required
              placeholder="Phone"
            />
          </div>
          <input className="input" type="text" required name="college" placeholder="College Name" />
          <input type="text" name="stream" required className="input" placeholder="Course Ex: BTech, BCA.." />
          <input className="input" type="text" required name="branch" placeholder="Branch Ex: ECE, CSE.." />
          <select className="input" name="course" required onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse}>
            <option value="FRONTEND">Frontend</option>
            <option value="DSA">DSA</option>
          </select>
          {errorMessage && <span className="error-message">{errorMessage}</span>}
          <button className="btn fr-aic g-10" disabled={isLoading}>
            <span>Request a callback</span>
            {isLoading && <Spinner />}
          </button>
        </form>
      </div>
    </div>
  );
});
