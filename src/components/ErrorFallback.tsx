export default function ErrorFallback() {
  return (
    <div>
      <h2>Произошала ошибка 😕</h2>
      <button onClick={() => window.location.reload()}>Перезагрузить</button>
    </div>
  );
}
