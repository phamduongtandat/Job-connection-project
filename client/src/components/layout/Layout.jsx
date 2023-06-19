import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
