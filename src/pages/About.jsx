import { Helmet } from 'react-helmet-async'

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Digital Agency</title>
        <meta
          name="description"
          content="Learn about our digital agency and how we help businesses grow online."
        />
        <link rel="canonical" href="https://www.yourdomain.com/about" />
      </Helmet>

      <section className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-6">About Our Agency</h1>
        <p className="text-lg leading-8">
          We are a full-service digital agency focused on web development, SEO,
          paid advertising, and social media growth. We help brands build
          visibility, traffic, and conversions.
        </p>
      </section>
    </>
  )
}

export default About