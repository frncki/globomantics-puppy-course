import "./puppy.css"
import { useState } from "react"
import emailIcon from "./Email.png"
import Inquiry from "./Inquiry"
import PropTypes from 'prop-types';

const Puppy = ({ puppy }) => {
    const [inquiryShown, setInquiryShown] = useState(false);
    const inquiryClick = () => {
        setInquiryShown(!inquiryShown);
    };
    return (
        <div>
            <div className="row mt-2">
                <h5 className="col-md-12">{puppy.country}</h5>
            </div>
            <div className="row">
                <h3 className="col-md-12">{puppy.address}</h3>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src={`/images/${puppy.photo}.jpg`} alt="Puppy" />
                </div>
                <div className="col-md-5">
                    <p className="price">${puppy.price}</p>
                    <p>{puppy.description}</p>
                    <img
                        src={emailIcon}
                        height="50"
                        alt="inquiry"
                        onClick={inquiryClick}
                    />
                    {inquiryShown && <Inquiry puppy={puppy} />}
                </div>
            </div>
        </div>
    );
}

Puppy.propTypes = {
    puppy: PropTypes.object.isRequired
};

export default Puppy;