import gql from 'graphql-tag';

export const queryCMS = gql`
  {
    allDatas {
      attendeesCount
      events {
        name
        location
        date
        language
      }
    }
    allCMses {
      header {
        attendees
        help
        myEvent
        update
      }
      dashboard {
        page {
          event {
            filterEvent {
              id
              name
            }
            placeholder
          }
        }
      }
    }
  }
`;
