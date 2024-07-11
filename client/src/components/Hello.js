'use client';

import { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import client from '../../lib/apolloClient';

const GET_HELLO = gql`
  query GetHello {
    hello
  }
`;

export default function Hello() {
    const [hello, setHello] = useState('');
    useEffect(() => {
        async function fetchHello() {
            const { data } = await client.query({
                query: GET_HELLO,
            });
            setHello(data.hello);
        }

        fetchHello();
    }, []);

    return <h1>{hello}</h1>;
}
