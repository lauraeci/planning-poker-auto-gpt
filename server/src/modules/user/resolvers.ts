import { MutationResolvers, QueryResolvers } from '../../generated/graphql';

// You can replace the following example data with your actual data source, e.g., a database
const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
];

const userQueryResolvers: QueryResolvers = {
    getUser: (_, { id }) => users.find((user) => user.id === id),
    getAllUsers: () => users,
};

const userMutationResolvers: MutationResolvers = {
    createUser: (_, { name }) => {
        const newUser = { id: Date.now().toString(), name };
        users.push(newUser);
        return newUser;
    },
    updateUser: (_, { id, name }) => {
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex === -1) {
            throw new Error('User not found');
        }
        users[userIndex].name = name;
        return users[userIndex];
    },
    deleteUser: (_, { id }) => {
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex === -1) {
            throw new Error('User not found');
        }
        const deletedUser = users.splice(userIndex, 1)[0];
        return deletedUser;
    },
};

export const userResolvers = {
    Query: userQueryResolvers,
    Mutation: userMutationResolvers,
};
