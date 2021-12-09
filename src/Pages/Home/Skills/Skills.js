import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div class="b-skills" id="skills">
            <div class="container">
                <h1> Skills</h1>
                <div class="row">
                    <div class="col-md-3">
                        <div class="skill-item center block">
                            <div className="chart-character">
                                <div className="chart" data-percent="92" data-bar-color="#23afe3">
                                    <span className="percent" data-after="%">92 </span>
                                </div>
                            </div>
                            <p>HTML</p>
                        </div>

                    </div>
                    <div class="col-md-3">
                        <div class="skill-item  name center block">
                            <div className="chart-character">
                                <div className="chart" data-percent="92" data-bar-color="#23afe3">
                                    <span className="percent" data-after="%">87 </span>
                                </div>
                            </div>
                            <p>CSS</p>
                        </div>

                    </div>
                    <div class="col-md-3">
                        <div class="skill-item  name center block">
                            <div className="chart-character">
                                <div className="chart" data-percent="92" data-bar-color="#23afe3">
                                    <span className="percent" data-after="%">70 </span>
                                </div>
                            </div>
                            <p>BOOTSRAP</p>
                        </div>

                    </div>
                    <div class="col-md-3">
                        <div class="skill-item  name center block">
                            <div className="chart-character">
                                <div className="chart" data-percent="92" data-bar-color="#23afe3">
                                    <span className="percent" data-after="%">82 </span>
                                </div>
                            </div>
                            <p>Javascript</p>
                        </div>

                    </div>
                    <div class="col-md-3">
                        <div class="skill-item  name center block">
                            <div className="chart-character">
                                <div className="chart" data-percent="92" data-bar-color="#23afe3">
                                    <span className="percent" data-after="%">68 </span>
                                </div>
                            </div>
                            <p>REACT</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Skills;