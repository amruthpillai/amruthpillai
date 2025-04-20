import Typewriter from "typewriter-effect";

const Ingredients = () => (
  <code className="h-[115px] text-center leading-loose">
    <Typewriter
      options={{ delay: 40 }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(2000)
          .typeString("<span class='text-blue-500'>const </span>")
          .typeString("owalishawon: Array<")
          .typeString("<span class='text-green-500'>Ingredient</span>")
          .typeString("> ")
          .typeString("<span class='text-blue-500'>= </span>")
          .typeString("[<br>")
          .typeString("<span class='pl-5'></span>")
          .typeString("<span class='text-red-500'>Developer</span>, ")
          .typeString("<span class='text-red-500'>Photographer</span>, ")
          .typeString("<span class='text-red-500'>Writer</span>,<br>")
          .typeString("<span class='pl-5'></span>")
          .typeString("<span class='text-red-500'>Sugar</span>, ")
          .typeString("<span class='text-red-500'>Spice</span>, ")
          .typeString("<span class='text-red-500'>...everythingNice</span>,<br>")
          .typeString("];")
          .start();
      }}
    />
  </code>
);

export default Ingredients;
