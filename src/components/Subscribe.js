import { useState } from 'react'
import '../styles/Subscribe.css'

export default function Subscribe() {

    const [email, setEmail] = useState("")

    console.log(email)

    return (
        <div className='sub-flex'>
            <div className="sub-ctn">
                <h1 className='text-bold text-3xl'>Subscribe us</h1>
                <p>To recieve mails alert on Company Announcements and SET Announcements on NCL International Logistics Public Company Limited</p>
                <div className='sub-mail'>
                    <div className='mail'>
                        <i class="fa fa-envelope icon"></i>
                        <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email...' />
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}