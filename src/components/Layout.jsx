import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-2">
      <Outlet />
        </main>
      <Footer />
    </div>
  );
}

export default Layout;
