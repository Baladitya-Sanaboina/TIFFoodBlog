import "./index.css";

const About = () => {
  return (
    <div className="about-us-main-background">
      <img
        src="https://res.cloudinary.com/dbylngblb/image/upload/v1728116788/girl_lp_s09oii.png"
        alt="about-us"
        className="about-us-image"
      />
      <div className="about-us-content">
        <h1 className="about-us-main-heading">About Us </h1>
        <p className="about-us-text">
          Lorem ipsum is simply dummy text of printing and typescripting
          industry. Lorem ipsum has been the industry's standard dummy text ever
          since the 1500s, When an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <div>
          <button className="about-us-button">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
