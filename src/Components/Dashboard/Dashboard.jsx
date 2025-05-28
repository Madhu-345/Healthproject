import React from 'react';
import './Dashboard.css';
import { MdSearch, MdNotifications, MdSettings, MdMenu } from 'react-icons/md';

const Dashboard = () => {
    return (
        <div className="main-content">
            <div className="dashboard-body">
                <div className="search-bar-wrapper">
                    <MdSearch className="search-icon" />
                    <a href="">search</a>
                    <button><i className="fa-solid fa-bell"></i></button>
                </div>
                <h2>Dashboard</h2>

                <div className="status-overview">

                    <div className="human-body-card">
                        <img src="src/assets/anatomySvg.jpeg" alt="Human Body" className="human-body-image" />

                        <div className="healthy-heart-overlay"><i class="fa-solid fa-heart"></i>Healthy Heart</div>
                        <div className="healthy-leg-overlay"><i class="fa-solid fa-section"></i>Healthy Leg</div>
                    </div>


                    <div className="health-metrics-cards">
                        <div className="metric-card lungs">
                            <div className="icon-placeholder"><img src="src\assets\lungs.jpeg" alt="" /></div>
                            <div>
                                <h3>Lungs</h3>
                                <p>Date: 26 Oct 2023</p>
                            </div>
                        </div>
                        <div className="metric-card teeth">
                            <div className="icon-placeholder "><img src="src\assets\teeth.jpeg" alt="" /></div>
                            <div>
                                <h3>Teeth</h3>
                                <p>Date: 26 Oct 2023</p>
                            </div>
                        </div>
                        <div className="metric-card bone">
                            <div className="icon-placeholder"> <img src="src\assets\bones.jpeg" alt="" /></div>
                            <div>
                                <h3>Bone</h3>
                                <p>Date: 26 Oct 2023</p>
                            </div>
                        </div>
                        <button className="details-button">Details →</button>
                    </div>
                </div>


                <div className="activity-section">
                    <h3>Activity</h3>
                    <p>3 appointment on this week</p>
                    <div className="activity-chart">

                        <div className="chart-bars">
                            <div className="bar" style={{ height: '50px' }}>Mon</div>
                            <div className="bar" style={{ height: '70px' }}>Tues</div>
                            <div className="bar" style={{ height: '30px' }}>Wed</div>
                            <div className="bar" style={{ height: '60px' }}>Thurs</div>
                            <div className="bar" style={{ height: '40px' }}>Fri</div>
                            <div className="bar" style={{ height: '80px' }}>Sat</div>
                            <div className="bar" style={{ height: '55px' }}>Sun</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;