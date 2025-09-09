import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
