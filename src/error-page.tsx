import { useRouteError } from "react-router-dom";

// type error = {
//   statusText: string,
//   message: string
// }

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* {error instanceof Error || typeof error === "object" && error !== null  && <i>{error.statusText || error.message}</i>} */}
        {/* {error instanceof Error && <i>{error.message}</i>} */}
        {/* <i>{error?.statusText || error?.error?.message}</i> */}
      </p>
    </div>
  );
}
