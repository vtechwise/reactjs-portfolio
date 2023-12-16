const Project = ({image,title}) => {
  return (
    <article>
      <div className="bg-base-300 rounded-xl group overflow-hidden">
        <img src={image} alt=""  className="group-hover:scale-105 duration-300 transition"/>
      </div>
      <h3 className="text-xl mt-4 capitalize font-semibold t">{title}</h3>
    </article>
  );
}
export default Project