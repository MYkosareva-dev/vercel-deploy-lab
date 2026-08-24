export default function GreetingPage() {
  // NEXT_PUBLIC_* vars are inlined at build time, so this must be a
  // static property access — destructuring process.env would not work.
  const greeting = process.env.NEXT_PUBLIC_GREETING || "Hello from Vercel";

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="px-8 py-32">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {greeting}
        </h1>
      </main>
    </div>
  );
}
