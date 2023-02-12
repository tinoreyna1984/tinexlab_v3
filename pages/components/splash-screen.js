export default function SplashScreen() {

    return (
        <div className="splash">
            {/* <img className="fade-in" src="./assets/inicio.png" alt="Inicio" /> */}
            <picture className="fade-in">
                <source srcSet="./avif/inicio.avif" type="image/avif" />
                <source srcSet="./webp/inicio.webp" type="image/webp" />
                <img src="./minified/inicio.png" alt="Inicio" />
            </picture>
        </div>
    );
}