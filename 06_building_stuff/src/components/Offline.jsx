export default function Offline() {
  return (
    <div className="offline-page-container flex flex-col items-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1>Oops! Looks like you are offline!</h1>
      <p>Check your Internet connection and try again.</p>
      <img
        src={require("../../public/offline.png")}
        alt="offline"
        width="300px"
      />
    </div>
  );
}
