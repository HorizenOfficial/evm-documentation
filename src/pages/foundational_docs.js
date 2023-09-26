import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout>
      <div
        style={{
          margin: "20px",
          fontSize: '20px',
        }}>
        <p>
          Foundational Docs page
          <br/>
          <br/>
          <ul>
            <li>
              <a href="#">Document 1</a>
            </li>
            <li>
              <a href="#">Document 2</a>
            </li>
          </ul>
        </p>
      </div>
    </Layout>
  );
}