import React from 'react';
import './service.css'; // Make sure to create this CSS file

const Service = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {[
            {
              icon: 'fa-user-tie',
              title: 'Master Chefs',
              description: 'Our chefs are highly trained professionals who create exquisite dishes.',
            },
            {
              icon: 'fa-utensils',
              title: 'Quality Food',
              description: 'We provide top-quality food made from the freshest ingredients.',
            },
            {
              icon: 'fa-cart-plus',
              title: 'Online Order',
              description: 'Easily order your favorite meals online from the comfort of your home.',
            },
            {
              icon: 'fa-headset',
              title: '24/7 Service',
              description: 'We are available around the clock to cater to your needs.',
            },
          ].map((service, index) => (
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`} key={index}>
              <div className="service-item rounded pt-3 shadow">
                <div className="p-4">
                  <i className={`fa fa-3x ${service.icon} text-primary mb-4`}></i>
                  <h5 className="service-title">{service.title}</h5>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
