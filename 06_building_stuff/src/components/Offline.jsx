export default function Offline() {
  return (
    <div
      className="offline-page-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
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
