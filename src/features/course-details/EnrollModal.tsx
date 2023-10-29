import React from "react";
import "./styles/enroll.scss";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    onEnrollNow: (data: any) => void;
}

export const EnrollModal: React.FC<Props> = ({ onEnrollNow }) => {
    const onSubmitForm = (e) => {
        // TODO: collect data 
    }

    return (
        <div className="enroll-modal-container">
            <form onSubmit={onSubmitForm} className="enroll-modal-body">
                <h2>Applying For DSA</h2>
                <input type="text" name="name" required min={3} placeholder="Name" />
                <input type="email" name="email" required placeholder="Email" />
                <input type="number" name="phone" required placeholder="Phone Number" />
                <div>
                    <input type="checkbox" name="updates" id="updates" />
                    <label htmlFor="updates">Send me updates over WhatsApp</label>
                </div>
                <button>Apply Now</button>
            </form>
            <CloseIcon className="close-icon" />
        </div >
    );
}