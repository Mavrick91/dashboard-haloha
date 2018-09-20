import gql from 'graphql-tag';

export const queryCMS = gql`
  {
    allDatas {
      attendeesCount
      events {
        id
        name
        location
        date
        language
        backgroundImage
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
