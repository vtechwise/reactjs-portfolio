import portfolioImg from '../assets/portfolioImg.jpg'

const Hero = () => {
  return (
      <div className="flex gap-y-8 md:flex-row">
          <div className='rounded-lg relative'>
              <img src={portfolioImg} className='w-screen h-[25rem] object-cover rounded-lg' alt="" />
              <button className="btn btn-primary absolute btn- rounded-full left-5  btn-sm bottom-20">hello@victor</button>
              <p className='mt-6 flex justify-end items-center gap-x-2 text-xs text-content-neutral '> <span className='h-2 w-2 bg-secondary rounded-full'></span>Available for new projects</p>
          </div>
    </div>
  )
}
export default Hero