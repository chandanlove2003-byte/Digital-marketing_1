import { Helmet } from 'react-helmet-async'

function Portfolio() {
  const projects = [
    {
      title: 'Ecommerce Website',
      desc: 'A conversion-focused eCommerce website for a fashion brand.',
    },
    {
      title: 'Local SEO Project',
      desc: 'Ranked a local business in Google Maps top 3 results.',
    },
    {
      title: 'Lead Generation Landing Page',
      desc: 'High-converting landing page built for paid ads campaigns.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Portfolio | Digital Agency</title>
        <meta
          name="description"
          content="See our digital agency portfolio for web development and marketing projects."
        />
        <link rel="canonical" href="https://www.yourdomain.com/portfolio" />
      </Helmet>

      <section className="max-w-7xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-10">Our Portfolio</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Portfolio