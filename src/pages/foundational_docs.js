import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Foundational Docs page...
        </p>
      </div>
    </Layout>
  );
}