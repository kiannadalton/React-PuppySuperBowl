import defaultPage from "./photos/defaultPage.png";
import seeDetails from "./photos/seeDetails.png";

export default function Information() {
  return (
    <div className="informationBody">
      <h2>Repo Links</h2>
      <p>
        <a
          href="https://github.com/kiannadalton/React-PuppySuperBowl"
          target="_blank"
        >
          Click Here
        </a>
        to see the repo of this assignment, the React Puppy Super Bowl. This
        project was built using React, RTK Query, React Router Dom, React Redux,
        and CSS.
      </p>
      <br />
      <p>
        <a
          href="https://github.com/kiannadalton/PuppySuperBowl"
          target="_blank"
        >
          Click Here
        </a>
        to see the repo of the previous Puppy Super Bowl assignment. This
        project was built using CSS, HTML, and JS.
      </p>
      <h2>Project Information</h2>
      <p>
        The Puppy Super Bowl is an assignment that may look similar--in fact, it
        is the React.js version of the previous Puppy Super Bowl Project! The
        original project was simply comprised of CSS, HTML, and JS. It was a
        Single Page Application with everything on the same screen rather than
        allowing users to navigate to different views within the application.
        <br />
        <br />
        The React Puppy Super Bowl assignment demnostrates a more complex
        design, made easier by using React, RTK Query, React Router Dom, React
        Redux, and CSS. The application has a consistent color scheme and
        additional functionality, such as searching for players and error
        handling.
        <br />
        <br />
        Below are a few snippets of the original project:
      </p>
      <br />
      <img
        className="informationImg"
        src={defaultPage}
        alt="Default Page of previous assignment"
      />
      <br />
      <img
        className="informationImg"
        src={seeDetails}
        alt="See Details Page of previous assignment"
      />
    </div>
  );
}
