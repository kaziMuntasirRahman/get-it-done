import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-full w-full">
      <Helmet>
        <title>Error • GetItDone</title>
        <link rel="icon" href="/images/error-favicon.png" />
      </Helmet>
      <img src="/images/error-page-bg.jpg" className="h-full w-full object-cover absolute top-0 left-0 -z-10" />
      <Link to="/" className="flex items-center flex-col lg:flex-row gap-1 m-14">
        <img src="/images/logo.png" className="rounded-full size-12" alt="GetItDone Logo" />
        <h1 className="text-white text-xl md:text-2xl font-bold">
          GetItDone
        </h1>
      </Link>
      <div className="w-full max-w-xl px-6 text-shadow-purple text-white mx-auto mt-40">
        <span className="inline-flex mb-6 rounded-full bg-violet-900 bg-opacity-50 px-3 py-1 text-sm font-semibold">
          Error 404
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-5">Well this is embarrassing…</h1>
        <p className="text-lg text-pink-200 mb-6">
          The page you&apos;re looking for isn&apos;t here. Feel free to return to the <a href="/" className="underline underline-offset-1 decoration-white/50 font-medium text-white">home page</a> or browse the <a href="/docs/" className="underline underline-offset-1 decoration-white/50 font-medium text-white">docs</a> to find what you&nbsp;need.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;