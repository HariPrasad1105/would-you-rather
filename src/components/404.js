import React from 'react';

export default function Error(props) {
  return (
    <div className="container">
      <strong>
        <p className="text-danger">
          The Question you are looking for is not found
        </p>
      </strong>
    </div>
  );
}