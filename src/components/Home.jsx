import CompFooter from "./CompFooter";
import CompNavbar from "./CompNavbar";

export default function Home() {
  return (
    <>
      <CompNavbar />

      <section id="heroSection" className="hero--section">
        <div className="hero--section--img">
          <img src="poster_home.png" alt="Hero Section" />
        </div>

        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Paul, </p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">
                American English <br />
                Teacher
              </span>
            </h1>
            <p className="hero--section-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <button className="btn btn-primary">Let's Get In Touch</button>
        </div>
      </section>

      <CompFooter />
    </>
  );
}
