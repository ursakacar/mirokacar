import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'

class ContactSuccess extends React.Component {
  render() {
    const siteTitle = 'Miro Kačar'
    const siteDescription = 'slikar'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Uspešno poslano!</h2>
            </header>
            <p>Hvala vam za vaše sporočilo.</p>
            <ul className="actions">
              <li>
                <a href="/" className="button">
                  Nazaj
                </a>
              </li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default ContactSuccess
