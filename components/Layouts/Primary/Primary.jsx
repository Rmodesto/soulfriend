import Head from 'next/head';
import Footer from '../../navigation/Footer/Footer';
import Header from '../../navigation/Header/Header';

export default function Primary({ children }) {
  return (
    <div className="flex flex-col h-screen  p-0 m-0 box-border outline-none">
      <Head>
        <title>SoulAmiga</title>
      </Head>
      <div className="container p-0 m-0 box-border min-h-screen">
        <Header />
        <main>{children}</main>
        <div className="m-auto" />'
        <Footer />
      </div>
    </div>
  );
}
