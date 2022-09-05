 import './WidgetSm.css'
 import { Visibility  } from '@material-ui/icons'
 
 export default function WidgetSm() {
   return (
     <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/1526844/pexels-photo-1526844.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Udhaya Kumar</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className='widgetSmIcon'/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/1526824/pexels-photo-1526824.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Stella Susai</span>
              <span className="widgetSmUserTitle">Web Developer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className='widgetSmIcon'/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/1526844/pexels-photo-1526844.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Uma Pandi</span>
              <span className="widgetSmUserTitle">Web Developer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className='widgetSmIcon'/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/1526804/pexels-photo-1526804.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Selvi Sekar</span>
              <span className="widgetSmUserTitle">Web Developer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className='widgetSmIcon'/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="https://images.pexels.com/photos/1526894/pexels-photo-1526894.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Fathima Xavier</span>
              <span className="widgetSmUserTitle">Web Developer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className='widgetSmIcon'/>
              Display
            </button>
          </li>
        </ul>
     </div>
   )
 }
 