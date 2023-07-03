import '../styles/ContactForm.css'

export default function ContactForm() {
    return (
        <>
            <div className='contact-ctn'>
                <h1 className='mb-10 font-bold'>Let's get in touch!</h1>
                <form className='grid'>
                    <div className='flex'>
                        <div>
                            <label>Name</label>
                            <input type="text soc-ctn" />

                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className='ml-10 grid text-area'>
                            <label>Message</label>
                            <textarea className='text-area mt-0' placeholder='Enter your message here...'></textarea>
                        </div>
                    </div>
                    <buttton>Send</buttton>
                </form>
            </div>
        </>
    )
}