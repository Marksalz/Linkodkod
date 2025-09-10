import { Outlet } from "react-router";

export default function Content() {
  return (
    <main className="main_content">
      <Outlet />
    </main>
  );
}
