import { ReactNode } from 'react';

interface FrontendProps {
  children: ReactNode;
}

const Frontend = ({ children }: FrontendProps) => {
  return (
    <>
      <h1>Frontend</h1>
    </>
  );
}

export default Frontend;
