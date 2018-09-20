// @flow

import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { queryCMS } from '../../graphql/queries/cms';
import Header from '../../components/Header';
import ResearchEvent from '../../components/ResearchEvent';
import ItemEvent from '../../components/ItemEvent';

export default class Dashboard extends Component<{}> {
  render() {
    return (
      <Query query={queryCMS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading ...</div>;
          if (error) return <div>Error !</div>;

          const { dashboard, header } = data.allCMses[0];
          const { attendeesCount, events } = data.allDatas[0];

          return (
            <div className="dashboard">
              <Header cmsHeader={header} attendeesCount={attendeesCount} />
              <div>
                <ResearchEvent
                  filterEvent={dashboard.page.event.filterEvent}
                  placeholder={dashboard.page.event.placeholder}
                />
                <ItemEvent events={events} />
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
