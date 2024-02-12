import imageBanner from '@/assets/Banner.jpg';
import './Banner.css';
export const Banner = () => {
  return (
    < div className='banner-container'>
    <img src={imageBanner} alt="Banner" width={"100%"} />
    <div className='banner-text'>
        <h1>Nosotros cuidamos <span>tu sonrisa</span></h1>
        <button className='btn'>Agendar turno</button>
    </div>
    </div>
  )
}
