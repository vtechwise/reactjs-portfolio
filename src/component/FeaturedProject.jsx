import SectionTitle from "./SectionTitle";
// import thumbnail from '../../public/project-one.jpg'
import comfyImg from "../assets/comfyStore.png";
const FeaturedProject = () => {
  return (
    <section className="section-margin">
      <SectionTitle text="my creations" />
      <div>
        <article>
          <div className="bg-base-300 rounded-xl">
            <img src={comfyImg} alt="" />
          </div>
        </article>
      </div>
    </section>
  );
};
export default FeaturedProject;
