import { ModeToggle } from "@/components/mode-toggle";
import { Link, Outlet, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <div>I'm a layout</div>
      <div className="flex gap-2">
        <Link
          to="/layout-a"
          activeProps={{
            className: "font-bold",
          }}
        >
          Layout A
        </Link>
        <Link
          to="/layout-b"
          activeProps={{
            className: "font-bold",
          }}
        >
          Layout B
        </Link>
        <ModeToggle />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
