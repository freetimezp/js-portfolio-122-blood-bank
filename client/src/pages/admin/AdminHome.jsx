import React from 'react';
import { useSelector } from 'react-redux';

import Layout from '../../components/shared/Layout/Layout';

const AdminHome = () => {
    const { user } = useSelector(state => state.auth);

    return (
        <Layout>
            <div className="container">
                <h4 className="m-4 text-end">
                    Welcome, <b className='text-primary'>{user?.user.name}</b>
                </h4>
                <h3 className='text-center'>
                    Manage Blood Bank App
                </h3>
                <hr />
                <p className='text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sequi
                    eius ipsa a omnis incidunt perferendis earum. Commodi suscipit blanditiis
                    deserunt corporis accusantium amet quas autem iste sunt consequuntur, harum
                    cupiditate vero facere rerum, quisquam dolorum eos aspernatur. In culpa
                    vitae illo enim quasi rerum sequi aliquam. Repellat, aspernatur provident,
                    pariatur laborum, fugit voluptatibus ad magnam sunt quidem optio sed? Omnis,
                    reprehenderit expedita dignissimos alias recusandae dolorem odit voluptatum
                    consequuntur labore placeat molestiae totam in explicabo quasi repudiandae,
                    similique sunt amet fuga eligendi optio fugiat eum eaque tenetur ad. Ex
                    blanditiis accusamus necessitatibus in provident repellat reprehenderit quas,
                    dolorum odio.
                </p>
            </div>
        </Layout>
    );
}

export default AdminHome;
