// eslint-disable-next-line no-unused-vars
import React from 'react';
import heroimg from './../../assets/hero.png';
import './../../css/element.css';

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '80%',
        marginBottom:'18vh'
      }}
    >
      <div style={{ padding: '3.5%' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '1.5%',
            marginRight: '1.5%'
          }}
        >
          {/* wrapper */}
          <div style={{ flex: 1, marginTop: '2%', fontFamily: 'Inter' }}>
            <p
              style={{
                fontSize: '200%',
                marginTop: '20%',
                marginLeft: '2%',
                fontWeight: '300',
                color: '#808080',
                textAlign: 'left'
              }}
            >
              Convert Indian Sign Language
              <br />
              To Text In <br />
              Real-Time With ISHAARA
            </p>
            <div
              className="wrap"
              style={{ marginTop: '3%', marginRight: '19vw',display:'flex' ,alignItems:'center'}}
            >
              <button className="get">Get Started</button>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={heroimg}
              style={{
                maxWidth: '100%',
                maxHeight: 'auto',
                borderTopRightRadius: '100px',
                marginTop: '-10px'
              }}
              alt="Your Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
