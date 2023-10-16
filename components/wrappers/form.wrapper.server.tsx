export default function FormWrapper({
  title,
  classes,
  children,
}: {
  title: string;
  classes?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`bg-gray-100 flex items-center justify-center ${classes}`}>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}
