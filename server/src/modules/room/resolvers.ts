import { MutationResolvers, QueryResolvers } from '../../generated/graphql';

// You can replace the following example data with your actual data source, e.g., a database
const rooms = [
    { id: '1', name: 'Room 1' },
    { id: '2', name: 'Room 2' },
];

const roomQueryResolvers: QueryResolvers = {
    getRoom: (_, { id }) => rooms.find((room) => room.id === id),
    getRooms: () => rooms,
};

const roomMutationResolvers: MutationResolvers = {
    createRoom: (_, { name }) => {
        const newRoom = { id: Date.now().toString(), name };
        rooms.push(newRoom);
        return newRoom;
    },
    updateRoom: (_, { id, name }) => {
        const roomIndex = rooms.findIndex((room) => room.id === id);
        if (roomIndex === -1) {
            throw new Error('Room not found');
        }
        rooms[roomIndex].name = name;
        return rooms[roomIndex];
    },
    deleteRoom: (_, { id }) => {
        const roomIndex = rooms.findIndex((room) => room.id === id);
        if (roomIndex === -1) {
            throw new Error('Room not found');
        }
        const deletedRoom = rooms.splice(roomIndex, 1)[0];
        return deletedRoom;
    },
};

export const roomResolvers = {
    Query: roomQueryResolvers,
    Mutation: roomMutationResolvers,
};
