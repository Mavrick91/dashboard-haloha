// @flow

import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { queryCMS } from '../../graphql/queries/cms';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import ResearchEvent from '../../components/ResearchEvent';
import ItemEvent from '../../components/ItemEvent';

export default class Dashboard extends Component<{}> {
  render() {
    return (
      <Query query={queryCMS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading ...</div>;
          if (error) return <div>Error !</div>;

          const {
            dashboard: {
              page: { event },
            },
            header,
            sidebar,
          } = data.allCMses[0];
          const { attendeesCount, events, progression } = data.allDatas[0];

          return (
            <div className="dashboard">
              <Header cmsHeader={header} attendeesCount={attendeesCount} />
              <div className="dashboard__sidebar-content">
                <div className="dashboard__content">
                  <ResearchEvent
                    filterEvent={event.filterEvent}
                    placeholder={event.placeholder}
                  />
                  <ItemEvent events={events} />
                </div>
                <Sidebar
                  cmsSidebar={sidebar}
                  progression={progression.percentage}
                  steps={progression.steps}
                />
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
