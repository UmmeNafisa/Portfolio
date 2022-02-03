import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './Skills.css'


const Skills = () => {
    const [state, setState] = useState({
        series1: [90],
        options1: {
            chart: {
                height: 200,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#facd5a',
                            fontSize: '20px'
                        },
                        value: {

                            color: '#fff',
                            fontSize: '15px',
                            show: true,
                        }
                    }
                }
            },
            fill: {
                colors: ['#f166f1']
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['HTML'],
        },

        series2: [70],
        options2: {
            chart: {
                height: 200,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#facd5a',
                            fontSize: '20px'
                        },
                        value: {
                            color: '#fff',
                            fontSize: '15px',
                            show: true,
                        }
                    }
                }
            },
            fill: {
                colors: ['#f166f1']
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['CSS'],
        },
        series3: [80],
        options3: {
            chart: {
                height: 200,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#facd5a',
                            fontSize: '20px'
                        },
                        value: {
                            color: '#fff',
                            fontSize: '15px',
                            show: true,
                        }
                    }
                }
            },
            fill: {
                colors: ['#f166f1']
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['JavaScript'],
        },
        series4: [65],
        options4: {
            chart: {
                height: 200,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#facd5a',
                            fontSize: '20px'
                        },
                        value: {
                            color: '#fff',
                            fontSize: '15px',
                            show: true,
                        }
                    }
                }
            },
            fill: {
                colors: ['#f166f1']
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['React JS'],
        },
        series5: [62],
        options5: {
            chart: {
                height: 200,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#facd5a',
                            fontSize: '20px'
                        },
                        value: {
                            color: '#fff',
                            fontSize: '15px',
                            show: true,
                        }
                    }
                }
            },
            fill: {
                colors: ['#f166f1']
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Node JS'],
        },
        series6: [58],
        options6: {
            chart: {
                height: 200,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#facd5a',
                            fontSize: '20px'
                        },
                        value: {
                            color: '#fff',
                            fontSize: '15px',
                            show: true,
                        }
                    }
                }
            },
            fill: {
                colors: ['#f166f1']
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Express JS'],
        },
        series7: [55],
        options7: {
            chart: {
                height: 200,
                color: 'white',
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#facd5a',
                            fontSize: '20px'
                        },
                        value: {
                            color: '#fff',
                            fontSize: '15px',
                            show: true,
                        }
                    }
                }
            },
            fill: {
                colors: ['#f166f1']
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['MongoDB'],
        },
        series8: [63],
        options8: {
            chart: {
                height: 200,
                color: 'white',
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#facd5a',
                            fontSize: '20px'
                        },
                        value: {
                            color: '#fff',
                            fontSize: '15px',
                            show: true,
                        }
                    }
                }
            },
            fill: {
                colors: ['#f166f1']
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['API'],
        },
    })

    return (
        <div className='about-bg' id='skills'>
            <h1 className="about-header" > My Skills </h1>
            <h4 className="about-who"> what I gain! </h4>
            <div className='dotted-line'> -------------- </div>
            <div id="chart" className='skill-chart'>
                <ReactApexChart options={state.options1} series={state.series1} type="radialBar" height={200} width={200} />
                <ReactApexChart options={state.options2} series={state.series2} type="radialBar" height={200} width={200} />
                <ReactApexChart options={state.options3} series={state.series3} type="radialBar" height={200} width={200} />
                <ReactApexChart options={state.options4} series={state.series4} type="radialBar" height={200} width={200} />
                <ReactApexChart options={state.options5} series={state.series5} type="radialBar" height={200} width={200} />
                <ReactApexChart options={state.options6} series={state.series6} type="radialBar" height={200} width={200} />
                <ReactApexChart options={state.options7} series={state.series7} type="radialBar" height={200} width={200} />
                <ReactApexChart options={state.options8} series={state.series8} type="radialBar" height={200} width={200} />
            </div>

        </div>
    );


};

export default Skills;