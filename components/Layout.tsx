import Nav from "./Nav";

const Layout = ({ children }) => (
  <div>
    <Nav />
    <div className="container mx-auto">
      <div className="">{children}</div>
    </div>
  </div>
);

export default Layout;
