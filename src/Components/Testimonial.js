import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar} from "react-icons/ai";
const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
       <p className="primary-subheading"> Reviews</p>
        <h1  className="primary-heading">
           What They Are Saying
        </h1>
      <p className="primary-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum tenetur dicta vel temporibus labore recusandae error hic, molestias repellat exercitationem excepturi praesentium esse quo.

      </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt=""/>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique vel mollitia, officiis, nam minima ut sunt, voluptates ad reiciendis iste natus numquam laudantium architecto sit!

        </p>
        <div className="testimonials-stars-container">
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>

        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;