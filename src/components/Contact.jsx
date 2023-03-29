import { motion } from "framer-motion"
import { useState,useRef } from "react"
import emailjs from '@emailjs/browser'
import { styles } from "../../styles"
import { EarthCanvas } from "./canvas"
import { sectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"




const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {}

  const handleSubmit = (e) => {}

  return (
   <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
    <motion.div variants={slideIn('left','tween',0,2,1)} className="flex-[0.78] bg-black-100 p-8 rounded-2xl">
      <p className={styles.sectionSubtext}>Get in Touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>
      <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
        <label className="flex flex-col">
          <span>Your Name</span>
          <input
          type='text'
          placeholder="Adam Langford"
          value={form.name}
          onchange={handleChange}
          className="bg-tertiary py-4 px-6 placeholder:text-tertiary text-white rounded-lg outline-none border-none font-medium"/>
        </label>

        { /** email */}

        <label className="flex flex-col">
          <span>Your Email</span>
          <input
          type='text'
          placeholder="info@example.com"
          value={form.email}
          onchange={handleChange}
          className="bg-tertiary py-4 px-6 placeholder:text-tertiary text-white rounded-lg outline-none border-none font-medium"/>
        </label>

        { /** message */}

        <label className="flex flex-col">
          <span>Message</span>
          <textarea
          rows="4"
          placeholder="What's your query?"
          value={form.message}
          onchange={handleChange}
          className="bg-tertiary py-4 px-6 placeholder:text-tertiary text-white rounded-lg outline-none border-none font-medium"/>
        </label>

        <button
        type="submit"
        className="bg-tertiary w-fit py-3 px-8 outline-none border-none font-bold shadow-md shadow-primary rounded-xl"        
        >{loading ? 'Sending' : 'Send'}</button>


      </form>
    </motion.div>
    <motion.div variants={slideIn('left','tween',0,2,1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
      <EarthCanvas />

    </motion.div>

   </div>
  )
}

export default sectionWrapper(Contact,"")