import portfolioImg from "../assets/portfolioImg.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col gap-y-10 md:flex-row">
      <div className="rounded-lg relative">
        <img
          src={portfolioImg}
          className="w-screen h-[25rem] object-cover rounded-lg"
          alt=""
        />
        <button className="btn btn-secondary absolute btn- rounded-full left-5  btn-sm bottom-20">
          hello@victor
        </button>
        <p className="mt-4 flex justify-end items-center gap-x-2 text-xs text-content-neutral ">
          {" "}
          <span className="h-2 w-2 bg-secondary rounded-full"></span>Available
          for new projects
        </p>
      </div>
      <div>
        <h1 className="text-4xl md:text-5xl tracking-wide font-semibold">
          I craft beautiful and unique products.
        </h1>
        <p className="mt-4 leading-8">
          in my code every details serves a purpose- <br /> orchestrating a
          digital masterpiece where user experience flow seamlessly{" "}
        </p>
        <button className="btn mt-6 btn-primary  rounded-full text-lg  ">Work with me</button>
      </div>
    </div>
  );
};
export default Hero;
