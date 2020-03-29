import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Miro Kačar"
        const siteDescription = "slikar"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Galerija</h2>
                        </header>
                        <p>Text... Rabim text, kratko biografijo,.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Biografija</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Nekaj mojih del</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Galerija</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Kontakt</h2>
                        <p>Blabla, lahko se dogovorimo za ogled galerije, delavnice, slikarsko solo, itd itd.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field" action="/contact-success" >
                                    <div className="row uniform 50%">
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="form-name" value="contact" />
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Ime" required /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" required /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Sporočilo" rows="4" required></textarea></div>
                                    </div>
                                <ul className="actions custom-button-margin">
                                    <li><input type="submit" value="Pošlji sporočilo" /></li>
                                </ul>
                                </form>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Naslov</span></h3>
                                        Zgornja Sorica<br />
                                        Slovenija
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Telefon</span></h3>
                                        +386 31 654 197
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:miro.kacar@gmail.com" target="_blank" >miro.kacar@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex