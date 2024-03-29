import {List,ListItem} from "react-mdl";
import { GoPrimitiveDot } from "react-icons/go";
import "./Experience.css"

export default function Experience(){
  return <section id='experience'><h3 className="aboutme-head">WORK EXPERIENCE</h3>
  <h4>fliteX - Full Stack Developer Intern (February 2021- March 2021)</h4>
  <List style={{alignContent:'center'}}>
    <ListItem style={{color:'#325C74',fontSize:'22px',fontFamily:"'Oxygen', sans-serif"}}>
 Optimized the application dashboard and reduced it's loading time by 50 seconds.</ListItem>
  <ListItem style={{color:'#325C74',fontSize:'22px',fontFamily:"'Oxygen', sans-serif"}}>Refactored React Js code to improve the performance.</ListItem>
  <ListItem style={{color:'#325C74',fontSize:'22px',fontFamily:"'Oxygen', sans-serif"}}>Worked with Recharts and React-map-gl to add the ability to visualize the data. </ListItem>
  <ListItem style={{color:'#325C74',fontSize:'22px',fontFamily:"'Oxygen', sans-serif"}}>Worked with Docker containers in production environment.</ListItem>
</List>
</section>
}