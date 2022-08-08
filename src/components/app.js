import {Component} from "react";


class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <header>

                </header>
                <div className="content">
                    <div className="block-main">
                        <div className="image">
                            <img src="https://avatars.githubusercontent.com/u/29627450?v=4" alt="andreySHSH"/>
                        </div>
                        <div className="block-pre">
                            <div onClick={() => {
                                window.location.href = "https://github.com/AndreySHSH"
                            }} className="block-logo color-main">
                                AndreySHSH
                            </div>
                            <div className="block-specialization">
                                <strong style={{fontSize: "12px"}}>
                                    Full Stack Developer
                                </strong>
                            </div>
                            <div className="block-text">
                                <p className="profile-info">

                                    <br/>
                                    Языки: Golang, JavaScript, SQL, Python 2/3, Bash, PHP<br/>
                                    <br/>
                                    Начал разрабаваться с PHP, делал сайты под ключ всякие админки. После перешел на Python.
                                    Реализовал парсинг яндекс маркета для сбора информации о ценообразовании.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="block-main">
                        <div className="link">
                            <a className="link-button" rel="noreferrer" target="_blank" href="https://t.me/andrey_shsh">Telegram</a>
                            <a className="link-button" rel="noreferrer" target="_blank" href="https://github.com/AndreySHSH">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;