import './Header.css'
import welcomeImage from '../../assets/welcome.png'

const welcome = ["Welcome for this site!!!", "Hello new Friends!!!", "Thank you for coming here"];

function getRandomInt(num) {
    return Math.floor(Math.random() * (num + 1));
}

export default function Header() {
    const welcomeWord = welcome[getRandomInt(2)];

    return(
        <header>
            <img src={ welcomeImage } alt="Welcome" />
            <p>{ welcomeWord }</p>
        </header>
    );
}