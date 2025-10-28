import React from 'react';
import SchulteGrid from '../features/schulte/components/SchulteGrid';

export default function Schulte() {
  return (
    <section>
      <h1>Schulte</h1>
      <SchulteGrid grid={[...Array(49).keys()]} />
    </section>
  );
}
