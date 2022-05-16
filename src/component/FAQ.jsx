import { Link } from 'react-router-dom'
import './FAQ.scss'

const FAQ = ({num,content}) => {
    return(
        <div className='FAQ'>
            <Link to='' className='number'>{num}</Link>
            <Link to='' className='content'>{content}</Link>
        </div>
    )
}

export default FAQ