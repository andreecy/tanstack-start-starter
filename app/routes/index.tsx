import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Page,
});

function Page() {
  return (
    <div className="container py-4">
      <p className="text-xl font-medium">Welcome to TanStack Start!</p>
    </div>
  );
}
