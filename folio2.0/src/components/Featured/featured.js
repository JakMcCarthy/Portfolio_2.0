import React from 'react';
import img_booklook from '../../assets/projects/booklook.png';
import img_aroundtown from '../../assets/projects/aroundtown.png';
import img_ecommerce from '../../assets/projects/ecommerce.jpg';

function Featured() {
        const featured = {
            projects: [
                {
                    id: "aroundtown",
                    name: "AroundTown",
                    github: "https://github.com/JakMcCarthy/EventsPage.git",
                    deployed: "https://damp-cove-99714.herokuapp.com/",
                    image: img_aroundtown,
                    alt: "AroundTown Project",
                    description: "Events Tracker with Ticketing System. Uses authentication and MVC, Handlebars.js as template, Sequelize as ORM and Express-Session for authentication.",
                    skills: "Bootstrap-Table | Handlebars |Sequelize | MySQL | Express | API | Heroku"
                },
                {
                    id: "booklook",
                    name: "BookLook",
                    github: "https://github.com/JakMcCarthy/BookLook.git",
                    deployed: "https://buhkluhk.herokuapp.com/",
                    image: img_booklook,
                    alt: "BookLook Search Engine" ,
                    description: "Search by book title, author, or genre. Simple and fast." ,
                    skills: "Bulma | JavaScript | CSS | jQuery | API",
                },
                {
                    id: "memoryGame",
                    name: 'Memory Game',
                    github: 'https://github.com/JakMcCarthy/Ecommerce-BackEnd' ,
                    deployed: 'https://bckendcommrce.herokuapp.com/',
                    InsomniaDemo: 'https://drive.google.com/file/d/1xJNYvI-nlYTEhkP6jlFfzdzt5QD2YQPs/view',
                    image: img_ecommerce,
                    alt: "e-commerce",
                    description: 'A simple e-commerce backend model',
                    skills: "JS | CSS | HTML | Express | MySQL | GraphQL",
                },

            ]
        }
        return (

            <section id="featured" className="feature">
              <h2 className="title">Featured Projects</h2>
              <div className="container">
                {featured.projects.map( featured => {
                  return (
                    <React.Fragment key={featured.id}>
                      <div className="card mb-3 text-start feature-project">
                        <div className="row">
                          <div className="col-12 col-lg-5">
                            <div className="card-header">Featured Project</div>
                            <div className="card-body">
                              <h3 className="card-title"><a href={featured.deployed} target="_blank" rel="noreferrer">{featured.name}</a></h3>
                              <p className="card-text">{featured.description}</p>
                              <p><small className="text-skill">{featured.skills}</small></p>
                              <a href={featured.github} target="_blank" rel="noreferrer">
                                <span><i class="fa-brands fa-github"></i></span>
                              </a>
                              
                            </div>
                          </div>
                          <div className="col-12 col-lg-7">
                            <a href={featured.deployed} target="_blank" rel="noreferrer">
                              <img src={featured.image} className="rounded float-end" alt={featured.alt} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </section>
        );
}

export default Featured;