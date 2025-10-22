import homePuppy from './photos/homePuppy.jpg'

export default function Home(){
    return (
      <div>
        <h2>Welcome to the Puppy Super Bowl!</h2>
        <h3>
          Meet the cutest competitors in the ultimate game of fetch and fun!
        </h3>
        <h3>
          Browse all the pups, check out their details, or enter your own furry
          friend into the competition.
        </h3>
        <img src={homePuppy} alt="puppy" />
      </div>
    );
}