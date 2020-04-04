import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.instagram.com/oljeplatno/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="mailto:miro.kacar@email.com" target="_blank" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Miro Kacar 2020</li><li>Naredila: <a href="https://github.com/ursakacar">Ursa Kacar</a></li><li>Dizajn: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
