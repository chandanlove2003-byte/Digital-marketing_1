import { useState } from 'react'
import axios from 'axios'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const [status, setStatus] = useState('')
  const API_URL = import.meta.env.VITE_API_URL

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const res = await axios.post(`${API_URL}/api/contact`, formData)
      setStatus(res.data.message)
      setFormData({
        name: '',
        email: '',
        service: '',
        message: '',
      })
    } catch (error) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-8 space-y-5"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-lg"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-lg"
      />

      <input
        type="text"
        name="service"
        placeholder="Interested Service (SEO / Web Dev / Ads)"
        value={formData.service}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-lg"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded-lg h-32"
      />

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
      >
        Send Inquiry
      </button>

      {status && <p className="text-sm text-gray-700">{status}</p>}
    </form>
  )
}

export default ContactForm