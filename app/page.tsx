import { connection } from "next/server";

export default async function GreetingPage() {
  // NEXT_PUBLIC_* vars are inlined at build time, so this must be a
  // static property access — destructuring process.env would not work.
  const greeting = process.env.NEXT_PUBLIC_GREETING || "Hello from Vercel";

  // Without `cacheComponents`, this route would be prerendered and the date
  // frozen at build time. connection() stops prerendering so the date is
  // computed per request. (`io()` is the 16.3 equivalent, but it is a no-op
  // unless cacheComponents is enabled in next.config.ts.)
  await connection();
  const today = new Date().toLocaleDateString("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  });

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="px-8 py-32">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {greeting}
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          Built during the Building with AI agents course.
        </p>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{today}</p>
      </main>
    </div>
  );
}
