import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../graphql/queries';

const RoomsComponent = () => {
    const { loading, error, data } = useQuery(GET_ROOMS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            {/* Render the rooms data */}
        </div>
    );
};

export default RoomsComponent;
