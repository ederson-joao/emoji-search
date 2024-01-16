import React, { Component} from "react";
import "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <header className="component-header">
                <img className="icon-title"
                    src="//cdn.jsdelivr.net/emojione/assets/png/1f50d.png"
                    alt="Lupa Esquerda"
                />
                Emoji Search
                <img className="icon-title"
                    src="//cdn.jsdelivr.net/emojione/assets/png/1f50e.png"
                    alt="Lupa Direita"
                />
            </header>
        );
    }
}