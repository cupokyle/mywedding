import React from 'react';

export default class Footer extends React.Component {

  // constructor(props) {
  //   super(props);
  // }c

  render() {
    return (
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 whiteText text-center" style={{padding:'20px'}}>
      	<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4 className="vonFontSimple">ABOUT US</h4>
          <hr/>
          <p className='smallFont'>It was love at first swipe. Yup we met on <em>Tinder</em>. Marco <i>Super Liked</i> Conor and the rest is history. </p>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4 className="vonFontSimple">ADDRESS</h4>
          <hr/>
          <h5>Pelican Point</h5>
          <p className='smallFont'>6311 County Hwy S21, Carlsbad, CA 92008</p>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4 className="vonFontSimple">CONTACT US</h4>
          <hr/>
          <a className="whiteText" target='_blank' rel="noopener noreferrer" href='mailto:conorandmarco@gmail.com'><i className="fa fa-envelope-o " aria-hidden="true"></i> E-mail</a>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4 className="vonFontSimple">Tag Us</h4>
          <hr/>
          <p className='smallFont'>Use the hashtag:</p>
          <h5>#ConorAndMarco</h5>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{fontSize:'10px'}}>
          <p className='smallFont'>Marco Alvarado Copyright 2018</p>
        </div>
      </div>
    );
  }
}
