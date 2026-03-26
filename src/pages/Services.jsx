import { Helmet } from 'react-helmet-async'

function Services() {
  const services = [
    'Website Development',
    'SEO Services',
    'Local SEO',
    'Google Ads Management',
    'Social Media Marketing',
    'Landing Page Optimization',
  ]

  return (
    <>
      <Helmet>
        <title>Services | Digital Agency</title>
        <meta
          name="description"
          content="Explore our web development, SEO, Google Ads, and marketing services."
        />
        <link rel="canonical" href="https://www.yourdomain.com/services" />
      </Helmet>

      <section className="max-w-7xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-10">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl p-6">
              <h2 className="text-2xl font-semibold">{service}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Services