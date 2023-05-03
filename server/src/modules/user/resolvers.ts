import {MutationResolvers, QueryResolvers, User} from '../../generated/graphql';

// You can replace the following example data with your actual data source, e.g., a database


let users: User[] = [];

function createNewUser(name: string): User {
    return {
        id: `user-${users.length + 1}`,
        name,
    };
}

const userQueryResolvers: QueryResolvers = {
    users: () => {
        return users;
    },
};

const userMutationResolvers: MutationResolvers = {
    createUser: async (_, { name }) => {
        const newUser = await createNewUser(name);
        users.push(newUser);
        return newUser;
    },
};

export const userResolvers = {
    Query: userQueryResolvers,
    Mutation: userMutationResolvers,
};
