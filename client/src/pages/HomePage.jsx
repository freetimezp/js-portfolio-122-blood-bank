import React from 'react';
import { useSelector } from 'react-redux';

import Spinner from '../components/shared/Spinner';
import Layout from '../components/shared/Layout/Layout';

const HomePage = () => {
    const { loading, error } = useSelector(state => state.auth);

    return (
        <Layout>
            {error && <span>{alert(error)}</span>}

            {loading ? <Spinner /> : (
                <div>

                    HomePage
                </div>
            )}
        </Layout>
    );
}

export default HomePage;
