import SectionTitle from './SectionTitle'
import thumbnail from '../../public/thumbnail.jpg'

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