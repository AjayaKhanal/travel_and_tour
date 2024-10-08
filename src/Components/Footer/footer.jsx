import React, {useEffect} from 'react'
import './footer.css'
import { FiSend, FiChevronRight } from "react-icons/fi"
import video from '../../Assets/video2.mp4'
import { MdOutlineTravelExplore } from "react-icons/md"
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai"
import { FaTripadvisor } from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  //create react hook to add scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay type='video/mp4'></video>
      </div>

      <div className="secContent Container">
        <div data-aos="fade-up" className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email address' />
            <button data-aos="fade-up" className="btn flex" type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>

        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon' /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className="footerLinks grid">

            {/* Group one */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Payment
              </li>

            </div>

            {/* Group two */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                RentCars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>

            </div>

            {/* Group three */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Oceania
              </li>

            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - AJAYA</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
