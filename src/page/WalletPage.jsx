import './WalletPage.scss'
import wallet_img from '../img/+img.png'
import { useState } from 'react'
import google_store from '../img/google.png'
import apple_store from '../img/apple.png'
import apk_store from '../img/apk.png'
import { Link } from 'react-router-dom'
import FAQ from '../component/FAQ'
import Footer from '../component/Footer'

export default function Wallet() {
    const [input , setinput] = useState('')

    const onChange = (e) => {
        setinput(e.target.value)
    }
    return(
        <div className='WalletPage'>
            <div className='wallet_firstbox'>
                <div className='wallet_title'>
                    <div className='metacode'>METACODE WALLET</div>
                    <div className='line'></div>
                    <div className='metacode_des'>INSTALL<br></br>METACODE WALLET &amp; CREATE METACODE</div>
                    <div className='input_box'>
                        <input value={input} placeholder={"Enter Meta_Code"} onChange={onChange} type="text" name="" id="" />
                        <button>CONNECT</button>
                    </div>
                </div>
                <img className='wallet_img' src={wallet_img} alt="wallet_img" />
            </div>
            <div className='app_store'>
                <div className='app_store_box'>
                    <Link to=''><img src={google_store} alt="google_store" /></Link>
                    <Link to=''><img src={apk_store} alt="apk_store" /></Link>
                    <Link to=''><img src={apple_store} alt="apple_store" /></Link>
                </div>
            </div>
            <div className='FAQ_box'>
                <h1>FAQ</h1>
                <FAQ num={'01'} content={'Where do i get the MetaCode?'} />
                <FAQ num={'02'} content={'What is MetaCode?'} />
                <FAQ num={'03'} content={'Is it possible to purchase NFT without linking meta code?'} />
                <FAQ num={'04'} content={"MetaWallet's face recognition keeps failing?"} />
            </div>
            <Footer />
        </div>
    )
}