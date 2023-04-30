import { gql } from '@apollo/client';

export const GET_ROOMS = gql`
  query {
    rooms {
      id
      name
    }
  }
`;

export const GET_ROOM = gql`
  query($roomId: ID!) {
    room(id: $roomId) {
      id
      name
      users {
        id
        name
        estimation
      }
    }
  }
`;
