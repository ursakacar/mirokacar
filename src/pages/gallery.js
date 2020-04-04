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
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Bela vrtnica', description: '90x70 cm, olje na platno'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Žitno polje', description: '120x90 cm, olje na platno'},
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