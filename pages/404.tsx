import { ReactElement } from 'react';
import type { NextPage } from 'next';

const error404: NextPage = (): ReactElement => (
  <div className="flex flex-col grow items-center justify-center">
    <div className="flex items-center text-gray-100">
      <h1 className="pr-6 py-2 border-r border-solid border-gray-700 text-3xl">
        404
      </h1>
      <h2 className="ml-5 text-xl">This page could not be found</h2>
    </div>
  </div>
);

export default error404;
