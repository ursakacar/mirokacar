import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/first-page/thumb-bela-vrtnica.jpg'
import thumb02 from '../assets/images/first-page/thumb-zitno-polje.jpg'
import thumb03 from '../assets/images/first-page/thumb-vinograd.jpg'
import thumb04 from '../assets/images/first-page/thumb-drvarji.jpg'
import thumb05 from '../assets/images/first-page/thumb-galeb.jpg'
import thumb06 from '../assets/images/first-page/thumb-gnezdo.jpg'
import thumb07 from '../assets/images/first-page/thumb-kruh.jpg'
import thumb08 from '../assets/images/first-page/thumb-moc.jpg'
import thumb09 from '../assets/images/first-page/thumb-ob-sori.jpg'
import thumb10 from '../assets/images/first-page/thumb-jesenski-macesni.jpg'
import thumb11 from '../assets/images/first-page/thumb-strazar-zitnih-polj.jpg'
import thumb12 from '../assets/images/first-page/thumb-snezi.jpg'
import thumb13 from '../assets/images/first-page/thumb-soncnice.jpg'
import thumb14 from '../assets/images/first-page/thumb-sopek.jpg'

import full01 from '../assets/images/first-page/bela-vrtnica.jpg'
import full02 from '../assets/images/first-page/zitno-polje.jpg'
import full03 from '../assets/images/first-page/vinograd.jpg'
import full04 from '../assets/images/first-page/drvarji.jpg'
import full05 from '../assets/images/first-page/galeb.jpg'
import full06 from '../assets/images/first-page/gnezdo.jpg'
import full07 from '../assets/images/first-page/kruh.jpg'
import full08 from '../assets/images/first-page/moc.jpg'
import full09 from '../assets/images/first-page/ob-sori.jpg'
import full10 from '../assets/images/first-page/jesenski-macesni.jpg'
import full11 from '../assets/images/first-page/strazar-zitnih-polj.jpg'
import full12 from '../assets/images/first-page/snezi.jpg'
import full13 from '../assets/images/first-page/soncnice.jpg'
import full14 from '../assets/images/first-page/sopek.jpg'

const DEFAULT_IMAGES = [
  {
    id: '14',
    source: full14,
    thumbnail: thumb14,
    caption: 'Rdeče vrtnice',
    description: '45x60 cm, olje na platno',
  },
  {
    id: '9',
    source: full09,
    thumbnail: thumb09,
    caption: 'Ob jezeru',
    description: '55x80 cm, olje na platno',
  },

  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Žitno polje',
    description: '120x90 cm, olje na platno',
  },
  {
    id: '5',
    source: full05,
    thumbnail: thumb05,
    caption: 'Galeb',
    description: '120x100 cm, olje na platno',
  },

  {
    id: '10',
    source: full10,
    thumbnail: thumb10,
    caption: 'Jesen',
    description: '100x80 cm, olje na platno',
  },
  {
    id: '12',
    source: full12,
    thumbnail: thumb12,
    caption: 'Sneži',
    description: '55x80 cm, olje na platno',
  },

  {
    id: '13',
    source: full13,
    thumbnail: thumb13,
    caption: 'Sončnice v modri vazi',
    description: '50x40 cm, olje na platno',
  },
  {
    id: '8',
    source: full08,
    thumbnail: thumb08,
    caption: 'Moč',
    description: '100x100 cm, olje na platno',
  },

  {
    id: '7',
    source: full07,
    thumbnail: thumb07,
    caption: 'Kruh',
    description: '100x100 cm, olje na platno',
  },
  {
    id: '6',
    source: full06,
    thumbnail: thumb06,
    caption: 'Gnezdo',
    description: '100x100 cm, olje na platno',
  },

  {
    id: '11',
    source: full11,
    thumbnail: thumb11,
    caption: 'Stražar žitnih polj',
    description: '100x100 cm, olje na platno',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Vinograd',
    description: '65x50 cm, olje na platno',
  },

  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Drvarji',
    description: '95x100 cm, olje na platno',
  },
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Bela vrtnica',
    description: '90x70 cm, olje na platno',
  },
]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Miro Kačar'
    const siteDescription = 'slikar iz Sorica'
    const siteKeywords = 'slikar, miro kacar, sorica, slikarstvo, olje platno, likovna delavnica, galerija, atelje'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
          <meta name="keywords" content={siteKeywords} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>O meni</h2>
            </header>
            <p>
              Odraščal sem v Sorici, prelepi majhni vasici, obdani z macesni,
              kjer živim in ustvarjam še danes. Mnogo let je tega, spomini komaj
              sežejo v čas otroštva, ko sem občudoval slike in poslikave Ivana
              Groharja v domači cerkvi. Prva znanja mi je dala šele osnovna
              šola, kasneje pa sem stopil na pot resnega izobraževanja. Po
              petletnem pedagoškem študiju sem začel poučevati, zraven pa
              neprestano iskal nova znanja in spoznanja. Pri tem mi je bil
              vzornik impresionist Ivan Grohar, čigar slikarsko maniro sem
              prikrojil na avtorsko samosvoj način.
            </p>

            <h4>
              {' '}
              Sejalec, ki ga je naslikal Ivan Grohar, odhaja, kaže nam hrbet.
              Jaz sem svojega obrnil, vrača se proti nam v želji, da prinese
              vsaj nekaj, že dolgo pozabljenih vrednot.
            </h4>
            <p></p>

            <p>
              {' '}
              Začel sem razstavljati po vseh večjih slovenskih mestih in se
              udeleževati likovnih kolonij. Imel sem preko 50 samostojnih ali
              skupinskih razstav, prejel sem številna priznanja in nagrade. Piko
              na i mojemu izobraževanju pa je dala mednarodna Šola za risanje in
              slikanje v Ljubljani, kjer sem nedolgo tega opravil diplomski in
              magistrski izpit.{' '}
            </p>

            <ul className="actions">
              <li>
                <a href="/biography" className="button custom-hidden">
                  Biografija
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Galerija</h2>

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

            <ul className="actions">
              <li>
                <a href="/gallery" className="button custom-hidden">
                  Galerija
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>Kritike</h2>
            <h4>Dr. Cene Avguštin</h4>
            <p>
              Dela Mira Kačarja predstavljajo pravo izjemo, ne samo v slovenskem
              prostoru, tudi širše. Njegovi motivi so bolj kot z razumom
              napolnjeni s čustvi in notranjo povezanostjo, zaviti v plašč toplo
              občutenih barv. V motivni svet, ki ga oblikuje, vnaša svojo misel,
              svoje razpoloženje in druge dejavnike, ki dani slikarski motiv
              bogatijo in dvigajo na raven umetniškega dela.{' '}
            </p>
            <h4>Likovna kritičarka Anamarija Štibilj Šajn</h4>
            <p>
              Ustvarjalnost Mira Kačarja predstavlja poklon slikarstvu, ki še
              vedno utripa v v duhu impresionističnih likovnih izkušenj, hkrati
              pa mu omogoča, da v njem živi svoje likovno življenje in
              vzpostavlja svoje sporočilo. V njegovih delih se manifestira
              izrazna moč zgoščene likovne vsebine, ki jo umetnik doživlja tudi
              kot močan duhovni naboj.
            </p>
            <h4>Prof. Andrej Pavlovec</h4>
            <p>
              Kačarjeve slike dopuščajo gledalcu dialog, da se dokoplje do
              bistva slikarske snovi, ki se skriva pod plastjo barv, ki ustvarja
              videz razblinjajoče se resničnosti. Med barvo in črto sklene
              kompromis, ki ga razumemo kot posledico umetnikovih izkušenj.
              Mehkoba kontur in študiozno tehtanje kontrastov, daje slikam
              naglašeno poetičnost.
            </p>
          </section>

          <section id="four">
            <h2>Kontakt</h2>
            <p>
              Povabim vas v Sorico na ogled mojih impresionistično obarvanih
              slik. Imam svoj atelje in malo galerijo, katerih vrata so odprta
              za ogled, nasvet, kratko delavnico slikanja ali pogovor o vaših
              željah.{' '}
            </p>
            <p>
              Popeljem vas tudi na ogled Groharjeve rojstne hiše v Sorici, kjer
              so razstavljeni trije originali in enajst kopij njegovih
              najboljših del.
            </p>
            <p>
              Kontaktirate me lahko preko telefona, emaila, ali pa mi preko spodnjega obrazca pustite sporočilo.
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form
                  name="contact"
                  method="post"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/contact-success"
                >
                  <div className="row uniform 50%">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Ime"
                        required
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Sporočilo"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <ul className="actions custom-button-margin">
                    <li>
                      <input type="submit" value="Pošlji sporočilo" />
                    </li>
                  </ul>
                </form>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Naslov</span>
                    </h3>
                    Zgornja Sorica
                    <br />
                    Slovenija
                  </li>
                  <li>
                    <h3 className="icon fa-phone">
                      <span className="label">Telefon</span>
                    </h3>
                    +386 45 197 196
                    <br></br>
                    +386 31 433 275
                  </li>
                  <li>
                    <h3 className="icon fa-envelope">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:miro.kacar@gmail.com" target="_blank">
                      slikar@mirokacar.si
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="five">
            <ul className="copyright">
              <li>&copy; Miro Kacar 2020</li>
              <li>
                Naredila: <a href="https://github.com/ursakacar">Ursa Kacar</a>
              </li>
              <li>
                Dizajn: <a href="http://html5up.net">HTML5 UP</a>
              </li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
