import React,{useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Detailone.css'
import projects from '../projects/projects';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/.test(navigator.userAgent);
}

export default function Detailone() {
  const { id, name } = useParams()
  const project = projects.find(it => it.id === parseInt(id))
  const [index, setindex] = useState(1)
  const [isMobile, setIsMobile] = useState(0);
  useEffect(() =>  {
    console.log(index)
    setIsMobile(isMobileDevice() ? 1 : 0);
  },[index])
  const list = project.pics
  return (
    <div>
        <div className="detailsRoute">
        <div>
        <Navbar detail={true}/>
        </div>
        <div className='detailsRouteH'>
        <h1>{project? project.name: null}</h1>
        </div>
        </div>
        <div className='royalChicDetail'>
          <img src={project.mainPic}/>
        </div>
        <div className='royalChicDetailOne'>
          <div className='royalChicDetailOneOne'>
            <div className='royalChicDetailOneOneOne'>{project? project.name: null}</div>
            <div className='royalChicDetailOneOneTwo'>
              {project.desc}
            </div>
            <div className='royalChicDetailOneOneThree'>
              <a href={project.preview} target='_blank'>
              <button type="">live preview <span>↑</span></button>
              </a>
            </div>
          </div>
          <div className='royalChicDetailOneTwo'>
            <div className='royalChicDetailOneTwoOne detailProject'>
              <div className='projectWho'>Category</div>
              <div className='projectWhy'>{project.category.join(',')}</div>
            </div>
            <div className='royalChicDetailOneTwoTwo detailProject'>
            <div className='projectWho'>Client</div>
            <div className='projectWhy'>{project.client}</div>
            </div>
            <div className='royalChicDetailOneTwoThree detailProject'>
            <div className='projectWho'>Start Date</div>
            <div className='projectWhy'>{project.start_date}</div>
            </div>
            <div className='royalChicDetailOneTwoFour detailProject'>
            <div className='projectWho'>Designer</div>
            <div className='projectWhy'>{project.designer}</div>
            </div>
          </div>
        </div>
        <div className='projectPicsSlider-section'>
            {isMobile === 0? (
              <>
                <div className='projectPicsSlider-sectionOne sliderItemImg'>
              <img src={index !== 0? list[index - 1] : list[list.length - 1]}/>
            </div>
            <div className='projectPicsSlider-sectionOne sliderItemImg'>
              <img src={index !== list.length? list[index] : list[index - 1]} alt={index}/>
            </div>
            <div className='projectPicsSlider-sectionOne sliderItemImg'>
              <img src={index !== list.length? list[index] : list[0] } alt={index}/>
            </div>
              </>
            ) : (
              <>
                <div className='projectPicsSlider-sectionOne sliderItemImg'>
                  <img src={index !== 0? list[index - 1] : list[list.length - 1]}/>
                </div>
              </>
            )}
          <div className='projectPicsSlider-sectionBtns'>
            <div className={index === 0? 'sliderBtn spanClicked': 'sliderBtn'} onClick={() => setindex(0)}></div>
            <div className={index === 1? 'sliderBtn spanClicked': 'sliderBtn'} onClick={() => setindex(1)}></div>
            <div className={index === 2? 'sliderBtn spanClicked': 'sliderBtn'} onClick={() => setindex(2)}></div>
            <div className={index === 3? 'sliderBtn spanClicked': 'sliderBtn'} onClick={() => setindex(3)}></div>
            <div className={index === 4? 'sliderBtn spanClicked': 'sliderBtn'} onClick={() => setindex(4)}></div>
          </div>
        </div>


        <div className='projectDescription'>
          <div className='projectDescriptionOne'>Project Description</div>
          <div className='projectDescriptionTwo'>
            {project.descs}
          </div>
          <div className='projectDescriptionThree'>
            <div className='projectDescriptionThreeOne'>
            THE STORY
            </div>
            <div className='projectDescriptionThreeTwo'>
              {project.story}
            </div>
          </div>
          <div className='projectDescriptionFour'>
          <div className='projectDescriptionThreeOne'>
          OUR APPROACH
            </div>
            <div className='projectDescriptionThreeTwo'>
              {project.approach}
            </div>
          </div>
          <div className='projectDescriptionFive'>
            
            {
              parseInt(id) !== 0? (
                <Link to={`/portfolios/${parseInt(id) - 1}/${projects[parseInt(id) - 1].name}`} className='projectArrows'>
                  <div className='projectDescriptionFiveOne'><span>↑</span></div>
                  <div className='projectDescriptionFiveTwo'>
                    <span>Previous Project</span>
                    <h1>{projects[parseInt(id) - 1].name}</h1>
                  </div>
                  </Link>
              ) : (
                <div className='projectArrows'>
                  <div className='projectDescriptionFiveOne'><span></span></div>
                  <div className='projectDescriptionFiveTwo'>
                    <span></span>
                    <h1></h1>
                  </div>
                </div>
              )
            }
            {id < projects.length - 1? (
              <Link to={`/portfolios/${parseInt(id) + 1}/${projects[parseInt(id) + 1].name}`} className='projectArrowsTwo'>
                <div className='projectDescriptionFiveTwoCondition'>
              <span>Next Project</span>
              <h1>{projects[parseInt(id) + 1].name}</h1>
            </div>
            <div className='projectDescriptionFiveOneCondition'><span>↑</span></div>
            </Link>
            ) : (
              <div className='projectArrowsTwo'>
                <div className='projectDescriptionFiveTwoCondition'>
              <span></span>
              <h1></h1>
            </div>
            <div className='projectDescriptionFiveOneCondition'><span></span></div>
              </div>
            )}
          </div>
        </div>
        
        <Footer detail={true}/>
    </div>
  )
}
