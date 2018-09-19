import gql from 'graphql-tag';

export const queryCMS = gql`
  {
    CMS(id: "cjm8g6ttq355f0149g8u4izqr") {
      header {
        attendees
        help
        myEvent
      }
    }
    Data(id: "cjm8h5vfu15fl0166qhv3etkh") {
      attendeesCount
    }
  }
`;
