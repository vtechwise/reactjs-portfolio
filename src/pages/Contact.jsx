import { LinkPage, SectionTitle } from "../component";
import contactImg from "../assets/contact-us.svg";
import { LuLinkedin } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FAQ } from "../utils/data";
import { useState } from "react";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Contact = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  function handleClick(index) {
    setCurrentItem(currentItem === index ? null : index);
    setShowAnswer(!showAnswer)
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
            <h5 className="text-xl font-semibold  mb-[.3rem] capitalize">
              connect
            </h5>
            <a href="">Linkedin</a>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <span className="text-primary text-3xl">
            <FaRegEnvelope />
          </span>
          <div>
            <h5 className="text-xl font-semibold  mb-[.3rem] capitalize">
              email
            </h5>
            <a href="">oguntayovictor65@gmail.com</a>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <span className="text-primary text-3xl">
            <IoLocationOutline />
          </span>
          <div>
            <h5 className="text-xl font-semibold  mb-[.3rem] capitalize">
              location
            </h5>
            <a href="">Nigeria Akure</a>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-x-20 ">
        <form action="" className="font-sans">
          <div className="form-control">
            <label htmlFor="" className="label capitalize font-inherit ">
              <span className="label-text"> name</span>
            </label>
            <input
              type="text"
              className=" input input-bordered bg-base-300 border-none outline-none rounded-lg"
              name="first name"
              required
            />
          </div>
          {/* <div className="form-control">
            <label htmlFor="" className="label capitalize">
              <span className="label-text">last name</span>
            </label>
            <input
              type="text"
              className=" input input-bordered "
              name="last name"
              required
            />
          </div> */}
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
            <button className="btn btn-primary mt-4 rounded-xl">submit</button>
          </div>
        </form>
        <div className="faq mt-6">
          <SectionTitle text="frequently asked question" />
          <div>
            {FAQ.map((singleFaq, index) => {
              const { id, question, answer } = singleFaq;
              return (
                <article className="shadow-l mb-2 p-4 border-2 border-base-200">
                  <div
                    className="flex gap-x-[2rem] justify-between cursor-pointer "
                    onClick={() => {
                      handleClick(index);
                    }}
                  >
                    <p className="font-bold ">{question}</p>
                    <div className="h-[2rem] w-[2rem] bg-primary opacity-[70%] flex-shrink-0 rounded-full grid relative  place-items-center text-[1.5rem]">
                      {currentItem === index ? (
                        <MdOutlineArrowDropUp className="fill-black absolute" />
                      ) : (
                        <MdOutlineArrowDropDown className="fill-black absolute" />
                      )}
                    </div>
                  </div> 
                  {currentItem === index && (
                    <div className={` answer mt-4 animate-[slide-top] transition slide-top duration-300`}>
                      <p>{answer}</p>
                    </div>
                  )}
                </article>
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
