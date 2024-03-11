import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import reviewimg from '../../assests/images/home/review_img.png'
const ClientCard = () => {
  return (
     <div className="client_card">
                <div className="upper_content">
                    <div className="img">
                        <img src={reviewimg} alt="" />
                    </div>
                    <div className="img_content">
                        <h2>
                            Alena Herwitz
                        </h2>
                        <div className="rating">
                            <small>  3 Years Ago</small>
                            <div className="star">
                                <MdOutlineStarPurple500 color='#FFB800' />
                                <MdOutlineStarPurple500 color='#FFB800' />
                                <MdOutlineStarPurple500 color='#FFB800' />
                                <MdOutlineStarPurple500 color='#FFB800' />
                            </div>
                            <div />
                        </div>
                    </div>
                </div>
                <div className="lower_content">
                    <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
                </div>
            </div>
  )
}

export default ClientCard