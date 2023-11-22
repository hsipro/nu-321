import React from 'react';

const JobInfo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mt-60 mb-30">     
          <h2 className="dp-section-title">We are always on the lookout for talent, so send your resume even if there is no posting for your specific position.</h2>
          <p className="mt-20">321DataPro hires top individuals who are passionate about their career development and looking to grow and train in a fast-paced, competitive environment. Our concept is growing individuals through training, exposure, and projects.</p>
        </div>
        <div className="col-md-4 mt-60 mb-30">    
          <div className="dp-column mb-30 wow fadeInUp  ml-20" data-wow-duration=".8s" data-wow-delay=".6s" style={{ visibility: 'visible', animationDuration: '0.8s', animationDelay: '0.6s' }}>
            <span className="dp-column__title mb-20">Current Openings</span>
            <div className="dp-column__text">
              <ol>
                <li>UI/UX Designer</li>
                <li>Cloud Deployment Specialist</li>
                <li>Full-stack Developer</li>
              </ol>

              <p>Please send your resume to kristen@321datapro.com.</p>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
