import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/layout-a")({
  component: LayoutAComponent,
});

function LayoutAComponent() {
  console.log("LayoutAComponent");
  return <div>I'm A!</div>;
}
