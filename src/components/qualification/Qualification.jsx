import React, {useState} from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey
            </span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} 
                    onClick = {() => toggleTab(1)}>
                        
                        <i className="uil uil-graduation-cap 
                        qualification__icon"></i> 
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick = {() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt 
                        qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Quang Tung Primary School</h3>
                                <span 
                                className="qualification__subtitle">Quang Binh - Viet Nam</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">    
                                    </i> 2007 - 2012
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Quang Tung Secondary School</h3>
                                <span 
                                className="qualification__subtitle">Quang Binh - Viet Nam</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">    
                                    </i> 2012 - 2016
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Luong The Vinh High School</h3>
                                <span 
                                className="qualification__subtitle">Ba Don - Viet Nam</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">    
                                    </i> 2016 - 2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">FPT University</h3>
                                <span 
                                className="qualification__subtitle">Da Nang - Viet Nam</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">    
                                    </i> 2019 - 2023
                                </div>
                            </div>
                        </div>
                    </div>

              {/* Experience */}
              
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Front-End Dev</h3>
                                <span 
                                className="qualification__subtitle">FPT Software - DN</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">    
                                    </i> 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Art Director</h3>
                                <span 
                                className="qualification__subtitle">Spain 
                                - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">    
                                    </i> 2019 - 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span 
                                className="qualification__subtitle">Spain 
                                - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">    
                                    </i> 2019 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Qualification