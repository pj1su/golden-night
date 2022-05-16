import './Footer.scss'
import first_img from '../img/01.png'
import facebook_img from '../img/f_logo_RGB-Blue_58.png'
import logo from "../img/logo.png"
import twiter_img from '../img/twiters.png'
import air_img from '../img/air.png'
import smart from '../img/smart.png'
import { Link } from 'react-router-dom'

export default function Footer() {

    return(
        <div className='Footer'>
            <div className='footer_box'>
                <div className='footer_logo'><img src={logo} alt="logo" /></div>
                <div className='right_box'>
                    <div className='SNS_box'>
                        <Link to=''><img src={first_img} alt="first_img" /></Link>
                        <Link to=''><img src={smart} alt="smart" /></Link>
                        <Link to=''><img src={air_img} alt="air_img" /></Link>
                        <Link to=''><img src={twiter_img} alt="twiter_img" /></Link>
                        <Link to=''><img src={facebook_img} alt="facebook_img" /></Link>
                    </div>
                    <div className='Inc'>
                        Copyrights SOLZAM Inc. All Rights Reserved
                    </div>
                </div>
            </div>
        </div>
    )
}