import Link from 'next/link';
import React from 'react';

const Products = () => {
  return (
    <ul>
      <Link href={`/product/:id`}>
        <li>Watches</li>
      </Link>
      <Link href={`/product/:id`}>
        <li>Phones</li>
      </Link>
      <Link href={`/product/:id`}>
        <li>Trimmer</li>
      </Link>
    </ul>
  );
};

export default Products;
