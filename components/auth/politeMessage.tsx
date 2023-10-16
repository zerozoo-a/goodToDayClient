export function PoliteMessage({ message }: { message: string | undefined }) {
  if (undefined) return "";
  return (
    <p aria-live="polite" className="text-red-500">
      {message}
    </p>
  );
}
