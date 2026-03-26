import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <>
      <Helmet>
        <title>Digital Agency | Web Development, SEO & Marketing</title>
        <meta
          name="description"
          content="Top digital agency for web development, SEO, Google Ads, and social media marketing."
        />
        <link rel="canonical" href="https://www.yourdomain.com/" />
      </Helmet>

      <section className="bg-black text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Grow Your Business With Our Digital Agency
          </h1>
          <p className="text-lg md:text-xl mb-8">
            We build websites, rank businesses on Google, and run marketing
            campaigns that generate real leads and sales.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold"
          >
            Get Free Consultation
          </a>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-3">Website Development</h3>
            <p>Modern business websites, landing pages, and eCommerce stores.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-3">SEO Optimization</h3>
            <p>On-page SEO, technical SEO, local SEO, and backlink strategies.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-3">Paid Advertising</h3>
            <p>Google Ads, Meta Ads, and landing page funnels for conversions.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home