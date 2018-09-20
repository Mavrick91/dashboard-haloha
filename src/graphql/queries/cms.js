import gql from 'graphql-tag';

export const queryCMS = gql`
  {
    allDatas {
      attendeesCount
      progression {
        percentage
        steps {
          id
          validate
          stepName
        }
      }
      events {
        id
        available
        name
        location
        date
        language
        backgroundImage
      }
    }
    allCMses {
      sidebar {
        cmsProgression {
          title
          subtitle
        }
        cmsSteps {
          title
        }
      }
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
