import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="space-y-10 p-6 text-center">
        <h1 className="text-2xl font-semibold">👏 Welcome to React Router!</h1>
        <p className="font-mono text-neutral-500">`{loaderData.message}`</p>
      </div>
    </div>
  );
}
