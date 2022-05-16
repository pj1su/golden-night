import './MainPage.scss'
import FAQ from '../component/FAQ'
// import code_img from '../img/01.png'
import { useState } from 'react'
import cx from 'classnames'
import Footer from '../component/Footer'
import eclipse from '../img/eclipse.png'

export default function Main() {
    const [buy , setbuy] = useState(false)
    const [codeinput , setcodeinput] = useState('')

    const onFocus = (e) => {
        setbuy(true)    
    }
    const onBlur = () => {
        setbuy(false)
    }
    const onChange = (e) => {
        setcodeinput(e.target.value)
    }
    const Item = ({ text }) => {
        return text;
    }
    return(
        <div className='MainPage'>
            <div className='margin_box'></div>
            <div className='Title_box'>
                <div className='Title'>PUBLIC SALE</div>
                <div className='day'>2022.04.02 ~ 2022.04.03</div>
                <div className='code'>
                    <img src={eclipse} alt="eclipse" />
                    <span>OX3GDSAHH89HDASFHOOOPAJDF</span>
                    </div>
            </div>
            <div className={cx('code_input',{act : buy})}>
                <div className='descriptions'>Enter the purchase quantity <Item text={<br />} /> and click the Buy button</div>
                {buy && <div className='total'>TOTAL PRICE :<span>&nbsp;0 ETH</span></div>}
                <div className='input_box'>
                    <input value={codeinput} onBlur={onBlur} onChange={onChange} onFocus={onFocus} placeholder="PLEASE ENTER QUANTITY" type="text"/>
                    <button className={cx('sub_btn',{btn_active : buy})} onBlur={onBlur} onClick={onFocus}>BUY</button>
                </div>
            </div>
            <div className='FAQ_LIST'>
                <h1>FAQ</h1>
                <FAQ num={"01"} content={"NTF 구매 후 무엇을 하면 되나요?"} />
                <FAQ num={"02"} content={"NTF를 판매하려면 어떻게 해야 하나요?"} />
                <FAQ num={"03"} content={"게임에서 NFT를 사용할 수 있나요?"} />
                <FAQ num={"04"} content={"NFT를 가지고 있으면 어떤 혜택이 있나요?"} />
                <FAQ num={"05"} content={"NTF 구매 후 무엇을 하면 되나요?"} />
                <FAQ num={"06"} content={"NTF 구매 후 무엇을 하면 되나요?"} />
            </div>
            <Footer/>
        </div>
    )
}