const Project = ({image,title}) => {
  return (
    <article>
      <div className="bg-base-300 rounded-xl">
        <img src={image} alt="" />
      </div>
      <h3 className="text-xl mt-4 capitalize font-semibold">{title}</h3>
    </article>
  );
}
export default Project