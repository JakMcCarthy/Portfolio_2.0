import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';





function Experience() {
       
    return (

        <section id="experience" className="jobs">
          <h2 className="title">Experience</h2>
          <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--school"
                contentStyle={{ background: '#006D77', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #95A8BC' }}
                date="2021 - Present"
                iconStyle={{ background: '#BE7220', color: '#fff' }}
                icon={<i class="fa-solid fa-graduation-cap work-icons" />}
            >
                <h3 className="vertical-timeline-element-title">Uconn Coding Bootcamp</h3>
                <h4 className="vertical-timeline-element-subtitle">Anywhere, USA</h4>
                <ul>
                <li>
                <p>"Experienced with a variety of languages, platforms, frameworks, and content management systems</p>
                </li>
                <li>
                    <p>Collaborated with small teams of student designers to build a multi page React website for a social media task tracker.</p>
                </li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#006D77', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #95A8BC' }}
                date="2014 - 2021"
                iconStyle={{ background: '#BE7220', color: '#fff' }}
                icon={<i class="fa-solid fa-briefcase work-icons2"></i>}
            >
                <h3 className="vertical-timeline-element-title">USPS</h3>
                <h4 className="vertical-timeline-element-subtitle">New Haven, CT</h4>
                <ul>
                <li>
                    <p>Daily sorting of letters, parcels and periodicals in route order</p>
                </li>
                <li>
                    <p>Accurately delivering mail to 500+ clients daily</p>
                </li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--school"
                contentStyle={{ background: '#006D77', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #95A8BC' }}
                date="2020 - 2021"
                iconStyle={{ background: '#BE7220', color: '#fff' }}
                icon={<i class="fa-solid fa-graduation-cap work-icons" />}
            >
                <h3 className="vertical-timeline-element-title">Tunxis Community College</h3>
                <h4 className="vertical-timeline-element-subtitle">Farmington, CT</h4>
                <ul>
                <li>
                    <p>Associates in Science</p>
                </li>
                <li>
                    <p>To close out degree to transition into learning code full-time</p>
                </li>
                </ul>
            </VerticalTimelineElement>
        </VerticalTimeline>
        
            
            
        </section>
    );
        

}

export default Experience;