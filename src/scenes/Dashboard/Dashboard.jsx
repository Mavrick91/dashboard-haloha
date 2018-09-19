// @flow

import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { queryCMS } from '../../graphql/queries/cms';
import Header from '../../components/Header';
import ResearchEvent from '../../components/ResearchEvent';

export default class Dashboard extends Component<{}> {
  render() {
    return (
      <Query query={queryCMS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading ...</div>;
          if (error) return <div>Error !</div>;

          return (
            <div>
              <Header
                cmsHeader={data.CMS.header}
                attendeesCount={data.Data.attendeesCount}
              />
              <div>Dashboard</div>
              <ResearchEvent />
            </div>
          );
        }}
      </Query>
    );
  }
}
