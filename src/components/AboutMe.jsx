import CompFooter from "./CompFooter";
import CompNavbar from "./CompNavbar";

export default function AboutMe() {
  return (
    <>
      <CompNavbar />
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="aboutme.jpg" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
              I grew up in a tiny village in the English countryside, but I’ve
              always had big dreams. Now, my goal is to help the world to speak
              English confidently and fluently!
            </p>
            <p className="hero--section-description">
              Learning a foreign language doesn’t have to be scary, embarrassing
              or boring. I will teach you to enjoy the language-learning process
              so that you can feel proud of every word you say.
              <br />
              <br />
              Over six million students have joined me on their journey to
              English fluency – what are you waiting for?
              <br />
              <br />
              Come and join me!
            </p>
            <button className="btn btn-primary">Let's Get In Touch</button>
          </div>
        </div>
      </section>
      <CompFooter />
    </>
  );
}
