import homePuppy from "./photos/homePuppy.jpg";

export default function Home() {
  return (
    <div id="homePage">
      <h2>Welcome to the Puppy Super Bowl!</h2>
      <p>
        Meet the cutest competitors in the ultimate game of fetch and fun!
        Browse all the pups, check out their details, or enter your own furry
        friend into the competition.
      </p>
    
      <img src={homePuppy} alt="puppy" />
      <h2>History of the Puppy Super Bowl</h2>
      <p >
        It all began in 2005, when a group of animal lovers and football
        fanatics gathered around a living room TV on Super Bowl Sunday — and
        realized something was missing: puppies. While humans clashed on the
        gridiron, the idea sparked to create a softer, furrier, and undeniably
        cuter kind of competition.
        <br />
        <br />
        Thus, the Puppy Super Bowl was born.
        <br />
        <br />
        The inaugural event took place on a tiny patch of turf in a local animal
        shelter, featuring six untrained (but highly motivated) puppies chasing
        a squeaky football. No one scored any points, but every pup won hearts —
        and a few shoes were lost in the process.
        <br />
        <br />
        By 2010, the event had grown into a nationwide sensation, featuring
        official teams like the Barkaneers and the Chew York Giants. Fans tuned
        in not for the touchdowns, but for the tail wags, tumbles, and
        unexpected nap breaks mid-field.
        <br />
        <br />
        In recent years, the Puppy Super Bowl has expanded beyond the field,
        including owner interviews, team stats, and a full adoption spotlight,
        helping thousands of shelter dogs find their forever homes.
        <br />
        Today, the Puppy Super Bowl stands as a proud celebration of teamwork,
        cuteness, and slobbery sportsmanship — reminding us all that sometimes,
        the best plays are the ones that end in belly rubs.
      </p>
    </div>
  );
}
