import Progress from './Progress';

const Layout = ({ children }) => {
  return (
    <div>
      <Progress />
      {/* Rest of your layout */}
      {children}
    </div>
  );
};

export default Layout;
