import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

type LayoutProps = {
  children: React.ReactNode;
};

export default Layout;
