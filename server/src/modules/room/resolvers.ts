import {MutationResolvers, QueryResolvers, Room, User} from '../../generated/graphql';

let rooms: Room[] = []

function createNewRoom(name: string): Room {
    return {
        id: `room-${rooms.length + 1}`,
        name,
        users: [],
        estimations: [],
    };
}

export const findRoomById = async (id: string): Promise<Room | null> => {
    return rooms.find((room) => room.id === id) || null;
};

const roomQueryResolvers: QueryResolvers = {
    getRoom: async (parent, args) => {
        const { id } = args;
        // Replace the following line with the actual implementation
         // Assuming findRoomById() returns a Promise
        return await findRoomById(id);
    },
    getRooms: () => {
        return rooms;
    },
};

const roomMutationResolvers: MutationResolvers = {
    createRoom: async (_, { name }) => {
        const newRoom = await createNewRoom(name);
        rooms.push(newRoom);
        return newRoom;
    },

    joinRoom: async (_, { roomId, userName }) => {
        const roomIndex = await rooms.findIndex((room) => room.id === roomId);
        if (roomIndex === -1) {
            throw new Error('Room not found');
        }
        rooms[roomIndex].name = userName;
        const user: User = {
            id: `user-${rooms[roomIndex].users.length + 1}`,
            name: userName
        }
        return user;
    },
    leaveRoom: (_, { roomId}) => {
        const roomIndex = rooms.findIndex((room) => room.id === roomId);
        if (roomIndex === -1) {
            throw new Error('Room not found');
        }
        rooms.splice(roomIndex, 1)[0];
        return true
    },
};

export const roomResolvers = {
    Query: roomQueryResolvers,
    Mutation: roomMutationResolvers,
};
