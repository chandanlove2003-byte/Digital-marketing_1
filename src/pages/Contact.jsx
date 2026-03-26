import { Helmet } from 'react-helmet-async'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Digital Agency</title>
        <meta
          name="description"
          content="Contact our digital agency for SEO, web development, and paid advertising services."
        />
        <link rel="canonical" href="https://www.yourdomain.com/contact" />
      </Helmet>

      <section className="max-w-3xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <ContactForm />
      </section>
    </>
  )
}

export default Contact