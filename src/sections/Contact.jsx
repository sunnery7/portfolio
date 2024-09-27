import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"


const Contact = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({ target : { name, value }}) => {
        setForm({ ...form, [name]: value })
    }
//service_j3s1t7c
    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        try {
            await emailjs.send(
                'service_j3s1t7c', 
                'template_zb21n2j', 
                {
                    from_name: form.name,
                    to_name: 'Sunday Ayoade',
                    from_email: form.email,
                    to_email: 'ayoadesunday97@gmail',
                    message: form.message
                },
                'CjR4e_3PXtUmlMlp4'
            )

                setLoading(false)
                setForm({
                    name: '',
                    email: '',
                    message: ''
                })
                alert('Your message has been sent successfully')
        } catch (error) {
            setLoading(false)
            alert('Oops, something went wrong')
            console.log(error);
               
        }

        
    }


  return (
    <section className="my-20 c-space" id="contact">
        <div className="relative min-h-screen flex items-center justify-center flex-col">
            <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 h-[900px] min-w-full" />

            <div className="contact-container">
                <h3 className="head-text">Let's talk</h3>
                <p className="text-lg text-white-600 mt-3">
                    Whether you're looking to build a new website, improve your existing website, or bring a unique project to life, I'm here to help.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-7 flex flex-col mt-12">
                    <label htmlFor="" className="space-y-3">
                        <span className="field-label">Full Name</span>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter your name"
                            value={form.name}
                            onChange={handleChange}
                            className="field-input"
                        />
                    </label>
                    
                    <label htmlFor="" className="space-y-3">
                        <span className="field-label">Email</span>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="johndoe@example.com"
                            value={form.email}
                            onChange={handleChange}
                            className="field-input"
                        />
                    </label>

                    <label htmlFor="" className="space-y-3">
                        <span className="field-label">Message</span>
                        <textarea
                            name="message"
                            placeholder="Hi, I wanna to give you a job..."
                            required
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            className="field-input"
                        />
                    </label>
                    <button
                        type="submit"
                        className="field-btn"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact