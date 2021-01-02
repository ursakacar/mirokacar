import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/first-page/thumb-bela-vrtnica.jpg'
import thumb02 from '../assets/images/first-page/thumb-zitno-polje.jpg'

import full01 from '../assets/images/first-page/bela-vrtnica.jpg'
import full02 from '../assets/images/first-page/zitno-polje.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Bela vrtnica',
    description: '90x70 cm, olje na platno',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Žitno polje',
    description: '120x90 cm, olje na platno',
  },
]

class HomeIndex extends React.Component {
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
            <header className="major"></header>
            <ul className="actions">
              <li></li>
            </ul>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
