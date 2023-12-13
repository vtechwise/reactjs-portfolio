import SectionTitle from './SectionTitle'
import thumbnail from '../assets/thumbnail.jpg'

const FeaturedProject = () => {
  return (
      <section className='section-margin'>
          <SectionTitle text='my creations' />
          <div>
              <article>
                  <img src={thumbnail} alt="" />
              </article>
          </div>
    </section>
  )
}
export default FeaturedProject