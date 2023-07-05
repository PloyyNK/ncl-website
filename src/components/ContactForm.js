import '../styles/ContactForm.css'

export default function ContactForm() {
    return (
        <>
            <div className='contact-ctn'>
            <h1 className='mb-10 font-bold text-xl'>Contact Us</h1>
                <form className='grid form-con'>
                    <div className='form-ctn'>
                        <div>
                            <label>Name</label>
                            <input type="text soc-ctn" />

                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className='grid text-area'>
                            <label>Message</label>
                            <textarea placeholder='Enter your message here...'></textarea>
                        </div>
                    </div>
                    <button>Send</button>
                </form>
            </div>
        </>
    )
}