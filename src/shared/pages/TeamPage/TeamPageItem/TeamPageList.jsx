import React from 'react'
import { Link } from 'react-router-dom'
import "./teampagelist.css"

function TeamPageList({ data }) {
  const team = data.items;
  const result = []

  console.log(team);

  for (let i = 0; i < team.length; i++) {
    result.push(
      <li className='teampagelist-item'>
        <Link to={`/team/details/${team[i]._id}`}
          onClick={() => {
            window.scrollTo(0, 0);
          }}>
          <div className='teampagelist-img-block'>
            <div className="teampagelist-item-bg"></div>
            <img src={`http://45.146.166.237:5000${team[i].img}`} className="teampagelist-img" />
          </div>
        </Link>

        <h3 className='title-h3'>{team[i].name}</h3>
        <p className='teampagelist-p'>{team[i].tag}</p>

        <div className='teampagelist-link-block'>

          {(team[i].social.facebook) ? <a href="#">

            <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.31893 10.8408L9.81112 7.60645H6.68221V5.49707C6.68221 4.58301 7.10409 3.73926 8.51034 3.73926H9.95175V0.961914C9.95175 0.961914 8.65096 0.71582 7.4205 0.71582C4.85409 0.71582 3.16659 2.29785 3.16659 5.11035V7.60645H0.283777V10.8408H3.16659V18.7158H6.68221V10.8408H9.31893Z" fill="#292F36" />
            </svg>
          </a> : null}
          {(team[i].social.tweeter) ? <a href="#">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1432 4.05957C16.8463 3.53223 17.4791 2.89941 17.9713 2.16113C17.3385 2.44238 16.6002 2.65332 15.8619 2.72363C16.6354 2.2666 17.1979 1.56348 17.4791 0.68457C16.776 1.10645 15.9674 1.42285 15.1588 1.59863C14.4557 0.860352 13.5065 0.438477 12.4518 0.438477C10.4127 0.438477 8.76038 2.09082 8.76038 4.12988C8.76038 4.41113 8.79554 4.69238 8.86585 4.97363C5.80726 4.79785 3.06507 3.32129 1.23695 1.10645C0.92054 1.63379 0.744759 2.2666 0.744759 2.96973C0.744759 4.23535 1.37757 5.36035 2.3971 6.02832C1.79945 5.99316 1.20179 5.85254 0.709602 5.57129V5.60645C0.709602 7.39941 1.97523 8.87598 3.66273 9.22754C3.38148 9.29785 3.02991 9.36816 2.71351 9.36816C2.46741 9.36816 2.25648 9.33301 2.01038 9.29785C2.46741 10.7744 3.83851 11.8291 5.4557 11.8643C4.19007 12.8486 2.60804 13.4463 0.885384 13.4463C0.568977 13.4463 0.287727 13.4111 0.00647736 13.376C1.62366 14.4307 3.55726 15.0283 5.66663 15.0283C12.4518 15.0283 16.1432 9.43848 16.1432 4.55176C16.1432 4.37598 16.1432 4.23535 16.1432 4.05957Z" fill="#292F36" />
            </svg>

          </a> : null}
          {(team[i].social.in) ? <a href="#">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.83377 16.4658V5.9541H0.564242V16.4658H3.83377ZM2.18143 4.54785C3.23612 4.54785 4.07987 3.66895 4.07987 2.61426C4.07987 1.59473 3.23612 0.750977 2.18143 0.750977C1.1619 0.750977 0.318149 1.59473 0.318149 2.61426C0.318149 3.66895 1.1619 4.54785 2.18143 4.54785ZM16.033 16.4658H16.0681V10.7002C16.0681 7.8877 15.4353 5.70801 12.1306 5.70801C10.5486 5.70801 9.49393 6.58691 9.0369 7.39551H9.00174V5.9541H5.87284V16.4658H9.14237V11.2627C9.14237 9.8916 9.38846 8.59082 11.076 8.59082C12.7635 8.59082 12.7986 10.1377 12.7986 11.3682V16.4658H16.033Z" fill="#292F36" />
            </svg>
          </a> : null}

        </div>
      </li>
    )
  }


  return (
    <ul className='teampagelist'>
      {result}
    </ul>
  )
}

export default TeamPageList