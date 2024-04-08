export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I am Paul Chandler Hayes!</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Musician</span>
            {""}
            <br />
            Teacher
          </h1>
          <p className="hero--section--description">
            I am a professional English teacher.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--image">
        <img src="./img/avator.png" alt="Hero Section" />
      </div>
    </section>
  );
}
