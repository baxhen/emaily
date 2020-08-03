import React from 'react';
import { Link } from 'react-router-dom';
import { SurveyList } from './surveys/SurveyList';

export class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <SurveyList />
        <div className="fixed-action-btn">
          <Link
            to="/surveys/new"
            className="btn-floating btn-large waves-effect waves-light red"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}
