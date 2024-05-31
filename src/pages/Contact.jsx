import { LinkPage, SectionTitle } from "../component";
import contactImg from "../assets/contact-us.svg";
import { LuLinkedin } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FAQ } from "../utils/data";
import { useState } from "react";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useSpring, animated } from "@react-spring/web";
import { useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const navigation = useNavigation();
  const isSubmitting = navigation == "submitting";

  //COMMENT function for FAQ logic
  function handleClick(index) {
    setCurrentItem(currentItem === index ? null : index);
    setShowAnswer(!showAnswer);
  }

  // COMMENT handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const res = await axios.post(".netlify/functions/send-email", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      e.target.reset();
      toast.success(`${res.data.message}`);
    } catch (error) {
      throw new Error("there was an error");
    }
  }

  return (
    <section className="mt-16">
      <SectionTitle text="lets talk" />
      {/* <div className="grid place-items-center">
        <img src={contactImg} alt="" />
      </div> */}
      <div className="flex flex-col gap-y-8 mb-16 sm:flex-row justify-center gap-x-20">
        <div className="flex gap-x-2 items-center">
          <span className="text-primary text-3xl">
            <LuLinkedin />
          </span>
          <div>
            <h5 className=" font-bold mb-[.17rem] capitalize">connect</h5>
            <a href="">Linkedin</a>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <span className="text-primary text-3xl">
            <FaRegEnvelope />
          </span>
          <div>
            <h5 className="text- font-bold  mb-[.17rem] capitalize">email</h5>
            <a href="">oguntayovictor65@gmail.com</a>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <span className="text-primary text-3xl">
            <IoLocationOutline />
          </span>
          <div>
            <h5 className=" font-bold  mb-[.17rem] capitalize">location</h5>
            <a href="#">Nigeria Akure</a>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-x-20 ">
        {/* FORM INPUT */}
        <form action="" className="font-sans" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="" className="label capitalize font-inherit ">
              <span className="label-text"> name</span>
            </label>
            <input
              type="text"
              name="name"
              className=" input input-bordered bg-base-300 border-none outline-none rounded-lg"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label capitalize">
              <span className="label-text">email</span>
            </label>
            <input
              required
              type="email"
              className=" input bg-base-300 border-none outline-none rounded-lg"
              name="email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="" className="capitalize mt-2">
              <span className="label-text">message</span>
            </label>
            <textarea
              name="message"
              required
              cols="30"
              rows="10"
              className="textarea resize-none textarea-bordered bg-base-300 border-none outline-none rounded-lg"
            ></textarea>
            <button
              className="btn btn-primary mt-4 rounded-xl"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="loading loading-spinner"></div>
                </>
              ) : (
                "submit"
              )}
            </button>
          </div>
        </form>
        {/* END OF FORM INPUT */}

        <div className="faq mt-6">
          <SectionTitle text="FAQ" />
          <div>
            {FAQ.map((singleFaq, index) => {
              const { id, question, answer } = singleFaq;
              const isActive = currentItem === index;

              const maxContainerHeight = isActive !== null ? "1000px" : "0px";
              const containerSpring = useSpring({
                maxHeight: maxContainerHeight,
                opacity: isActive !== null ? 1 : 0,
                config: { tension: 250, friction: 20, duration: 600 },
              });
              const answerSpring = useSpring({
                height: isActive ? "auto" : 0,
                opacity: isActive ? 1 : 0,
                config: { duration: 200 }, // Adjust duration for slower animation
              });
              return (
                <animated.article
                  key={id}
                  style={containerSpring}
                  className="faq shadow-lg mb-3 p-4 border-2 border-base-200"
                >
                  <div
                    className="flex gap-x-[2rem] justify-between cursor-pointer "
                    onClick={() => {
                      handleClick(index);
                    }}
                  >
                    <p className="font-bold ">{question}</p>
                    <div className="h-[2rem] w-[2rem] bg-primary opacity-[70%] flex-shrink-0 rounded-full grid relative  place-items-center text-[2rem]">
                      {currentItem === index ? (
                        <MdOutlineArrowDropUp className="fill-white absolute" />
                      ) : (
                        <MdOutlineArrowDropDown className="fill-white absolute" />
                      )}
                    </div>
                  </div>
                  {currentItem === index && (
                    <animated.div
                      style={answerSpring}
                      className={` mt-4 animate-[slide-top] transition slide-top duration-300`}
                    >
                      <p>{answer}</p>
                    </animated.div>
                  )}
                </animated.article>
              );
            })}
          </div>
        </div>
      </div>
      <LinkPage text={"Back home"} link={"/"} />
    </section>
  );
};
export default Contact;
