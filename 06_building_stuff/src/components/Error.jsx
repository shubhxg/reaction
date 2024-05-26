import { useRouteError } from "react-router-dom";

export default function Error() {
  const err = useRouteError();
  return (
    <div>
    <h1>Error Occurred</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>{err?.status} {err?.statusText}</p>
    </div>
  );
}
