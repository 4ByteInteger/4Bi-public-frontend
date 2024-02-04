import React from "react";

import { courseDetailsData } from "./utils";
import { CourseDetails } from "./CourseDetails";
import { useParams } from "react-router-dom";
import { applyNowModel } from "../home/apply-now-model";

export const CourseDetailsSurface = () => {
    const { courseId } = useParams();

    const onPressApplyNow = () => {
        applyNowModel.actions.toggleModal();
    }

    return (
        <>
            <CourseDetails data={courseDetailsData[courseId ?? "dsa"]} onPressApplyNow={onPressApplyNow} />
        </>
    );
}