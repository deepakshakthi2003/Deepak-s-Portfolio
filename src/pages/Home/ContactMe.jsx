import email from '../../assets/email.png';
import linkedin from '../../assets/linkedin.png'

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
      </div>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:deepakshakthi2003@gmail.com">
            deepakshakthi2003@gmail.com
            </a>
          </p>
        </div>
        <div class="contact-info-container">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p>
            <a href="www.linkedin.com/in/v-deepak-7483672a1">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
