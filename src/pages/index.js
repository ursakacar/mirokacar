import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/first-page/thumb-bela-vrtnica.jpg'
import thumb02 from '../assets/images/first-page/thumb-zitno-polje.png'
import thumb03 from '../assets/images/first-page/thumb-vinograd.png'
import thumb04 from '../assets/images/first-page/thumb-drvarji.jpg'
import thumb05 from '../assets/images/first-page/thumb-galeb.png'
import thumb06 from '../assets/images/first-page/thumb-gnezdo.jpg'
import thumb07 from '../assets/images/first-page/thumb-kruh.png'
import thumb08 from '../assets/images/first-page/thumb-moc.png'
import thumb09 from '../assets/images/first-page/thumb-ob-sori.jpg'
import thumb10 from '../assets/images/first-page/thumb-jesenski-macesni.png'
import thumb11 from '../assets/images/first-page/thumb-strazar-zitnih-polj.png'
import thumb12 from '../assets/images/first-page/thumb-snezi.png'
import thumb13 from '../assets/images/first-page/thumb-soncnice.png'
import thumb14 from '../assets/images/first-page/thumb-sopek.png'

import full01 from '../assets/images/first-page/bela-vrtnica.jpg'
import full02 from '../assets/images/first-page/zitno-polje.png'
import full03 from '../assets/images/first-page/vinograd.png'
import full04 from '../assets/images/first-page/drvarji.jpg'
import full05 from '../assets/images/first-page/galeb.png'
import full06 from '../assets/images/first-page/gnezdo.jpg'
import full07 from '../assets/images/first-page/kruh.png'
import full08 from '../assets/images/first-page/moc.png'
import full09 from '../assets/images/first-page/ob-sori.jpg'
import full10 from '../assets/images/first-page/jesenski-macesni.png'
import full11 from '../assets/images/first-page/strazar-zitnih-polj.png'
import full12 from '../assets/images/first-page/snezi.png'
import full13 from '../assets/images/first-page/soncnice.png'
import full14 from '../assets/images/first-page/sopek.png'

const DEFAULT_IMAGES = [
    { id: '14', source: full14, thumbnail: thumb14, caption: 'Rdeče vrnice', description: '45x60 cm, olje na platno, prodano'},
    { id: '9', source: full09, thumbnail: thumb09, caption: 'Ob jezeru', description: '55x80 cm, olje na platno, prodano'},

    { id: '2', source: full02, thumbnail: thumb02, caption: 'Žitno polje', description: '120x90 cm, olje na platno, prodano'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Galeb', description: '120x100 cm, olje na platno, prodano'},

    { id: '10', source: full10, thumbnail: thumb10, caption: 'Jesen', description: '100x80 cm, olje na platno, prodanoo'},
    { id: '12', source: full12, thumbnail: thumb12, caption: 'Sneži', description: '55x80 cm, olje na platno, prodano'},

    { id: '13', source: full13, thumbnail: thumb13, caption: 'Sončnice v modri vazi', description: '50x40 cm, olje na platno, prodano'},
    { id: '8', source: full08, thumbnail: thumb08, caption: 'Moč', description: '100x100 cm, olje na platno, prodano'},

    { id: '7', source: full07, thumbnail: thumb07, caption: 'Kruh', description: '100x100 cm, olje na platno, prodano'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Gnezdo', description: '100x100 cm, olje na platno, prodano'},

    { id: '4', source: full04, thumbnail: thumb04, caption: 'Drvarji', description: '95x100 cm, olje na platno, prodano'},
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Bela vrtnica', description: '90x70 cm, olje na platno, prodano'},

    { id: '11', source: full11, thumbnail: thumb11, caption: 'Stražar žitnih polj', description: '100x100 cm, olje na platno, prodano'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Vinograd', description: '65x50 cm, olje na platno, prodano'},

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
                            <h2>O meni/kratka predstavitev/lahko tudi kaksen drug naslov.</h2>
                        </header>
                        <p>Text... Rabim text, kratko biografijo, info, pac predstavitveno besedilo

                        Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>

                        <h2>TODO (URSA) </h2>
                        <ul className="major">
                            <li>styling: text color (everything is kinda bland right now), avatar size, link colors</li>
                            <li>implement gallery/full portfolio</li>
                            <li>implement biography page</li>
                            <li>figure out how current gallery is implemeted and fix the stupid shit</li>
                        </ul>
                        <ul className="actions">
                            <li><a href="/biography" className="button custom-hidden">Biografija</a></li>
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
                            <li><a href="/gallery" className="button custom-hidden">Galerija</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Kontakt</h2>
                        <p>Tukaj rabim text glede ponudbe: "Lahko se dogovorimo za ogled galerije, delavnice, slikarsko solo, slike po narocilu, in tako dalje....</p>
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
                                        +386 31 433 275
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