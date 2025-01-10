interface DocSectionProps {
  title: string;
  description?: string | string[];
  children: React.ReactNode;
}

interface SubSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function SubSection({ title, description, children }: SubSectionProps) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      {description && (
        <p className="mb-4 text-gray-700">{description}</p>
      )}
      {children}
    </div>
  );
}

export function DocSection({ title, description, children }: DocSectionProps) {
  return (
    <section className="mb-16 first:mt-0 mt-16 border-t pt-12 first:border-0 first:pt-0">
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      
      {Array.isArray(description) ? (
        <ul className="mb-6 space-y-2 list-disc list-inside text-gray-700">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="mb-6 text-gray-700">{description}</p>
      )}

      {children}
    </section>
  );
} 