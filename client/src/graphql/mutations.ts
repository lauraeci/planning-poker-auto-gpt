import { gql } from '@apollo/client';

// Room mutations
export const CREATE_ROOM = gql`
  mutation($name: String!) {
    createRoom(name: $name) {
      id
      name
    }
  }
`
export const LEAVE_ROOM = gql`
mutation($roomId: ID!, $userId: ID!) {
  leaveRoom(roomId: $roomId, userId: $userId)
}
`

export const JOIN_ROOM = gql`
mutation($roomId: ID!, $name: String!) {
    joinRoom(roomId: $roomId, name: $name) {
        id
        name
    }
}
`

// Estimation mutations
export const CLEAR_ESTIMATIONS = gql`
    mutation($roomId: ID!) {
      clearEstimations(roomId: $roomId)
    }
`

export const SUBMIT_ESTIMATION = gql`
mutation($roomId: ID!, $userId: ID!, $estimation: Float!) {
  submitEstimation(roomId: $roomId, userId: $userId, estimation: $estimation) {
    id
    name
    estimation
  }
}
`

