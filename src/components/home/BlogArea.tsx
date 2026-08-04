
import React from 'react'

export default function BlogArea() {
  return (
    <>
      <section className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title wow fadeInUp delay-0-2s">
                <h2>Stories</h2>
              </div>
            </div>
          </div>

          <div className="row blog-post-box align-items-center">
            <div className="col-lg-6">
              <div className="blog-post-img">
                <a href="https://www.behance.net/gallery/253730681/Elanadus-10-Year-Journey-Anniversary-Illustration?platform=direct" target="_blank" rel="noopener noreferrer">
  <img src="assets/images/blog/blog1.jpg" alt="" />
</a>
                <div className="blog-post-category">
                  <a href="#">sm poster</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-post-caption">
                <h3>Posted on Jan 26</h3>
                <h2><a className="link-decoration" href="#">Elanadu – 10 Years of Growth | Anniversary Illustration Carousel</a></h2>
               <a className="theme-btn theme-btn-two" href="https://www.behance.net/gallery/253730681/Elanadus-10-Year-Journey-Anniversary-Illustration?platform=direct" target="_blank" rel="noopener noreferrer">Read more <i className="ri-arrow-right-line"></i></a>
              </div>
            </div>
          </div>


          <div className="row blog-post-box align-items-center">
            <div className="col-lg-6">
              <div className="blog-post-img">
                <a href="#">
                  <img src="assets/images/blog/blog2.jpg" alt="" />
                </a>
                <div className="blog-post-category">
                  <a href="#">Video Editing</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-post-caption">
                <h3>Posted on Aug 01</h3>
                <h2><a className="link-decoration" href="#">Gold's Gym | VR Fitness Social Media Reel</a></h2>
                <a className="theme-btn theme-btn-two" href="#">Read more <i className="ri-arrow-right-line"></i></a>
              </div>
            </div>
          </div>


          <div className="row blog-post-box align-items-center">
            <div className="col-lg-6">
              <div className="blog-post-img">
                <a href="#">
                  <img src="assets/images/blog/blog3.jpg" alt="" />
                </a>
                <div className="blog-post-category">
                  <a href="#">Design</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-post-caption">
                <h3>Posted on Aug 28</h3>
                <h2><a className="link-decoration" href="#">How Can Designers Prepare for the Future?</a></h2>
                <a className="theme-btn theme-btn-two" href="#">Read more <i className="ri-arrow-right-line"></i></a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
