export default function ErrorFallback() {
  return (
    <div>
      <h2>An error occurred 😕</h2>
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  );
}
