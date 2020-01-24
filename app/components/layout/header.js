import React from 'react';
import data from './data.json'

class header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <React.Fragment>
        <header data-test-id="vue-header" className="vue-header vue-header--show">
          <div className="wrap"> 
            <div data-test-id="vue-header__left" className="vue-header__left">
              <div>
                <a href="/" data-test-id="header_logo" className="vue-header__logo">
                  <img src={data.logo} alt="" className="vue-header__logo-img" />
                </a>
              </div>
              <div className="vue-header__count">
                <span className="vue-header__users">{data.userCount}</span>  {data.userMsj}
              </div>
            </div>
            <form action="/site/changeCity" method="get" name="cityselector">
              <input name="cityId" type="hidden" />
            </form> 
            <div data-test-id="vue-header__right" className="vue-header__right">
              <div>
                <div className="caption">
                  {data.caption} <strong>{data.captionStong}</strong>
                </div>
                <div className="title-small vue-header__phone header_contact_phone">
                  {data.phone}
                </div>
                <div data-test-id="vue-header__selects" className="vue-header__selects">
                  <div className="vue-header__city city-select city-right">
                    <div className="select-box" title={data.selectBoxTitle}>
                    <button data-test-id="city_select_button" data-ga-label="" data-ga-action="" data-ga-value="" className="button color--white vue-button">
                      <span className="select-box__title">{data.title}</span>
                      <i className="icon icon__angle-bkt--small-grey-down"></i>
                    </button>
                    </div>
                  </div> 
                  <div data-test-id="vue-header__auth" className="vue-header__auth auth-select">
                    <div className="select-box --show-list-on-hover">
                      <button data-ga-label="" data-ga-action="" data-ga-value="" className="button color--white vue-button">
                        <span className="select-box__title">{data.authSelectBoxTitle}</span>
                        <i className="icon icon__angle-bkt--small-grey-down"></i>
                      </button>
                      <div className="select-box__options">
                        <div className="subhead select-box__options-item">
                          {data.selectBoxOptionOne}
                        </div>
                        <div className="subhead select-box__options-item">
                          {data.selectBoxOptionTow}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}


export default header;