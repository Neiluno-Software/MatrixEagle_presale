
interface PhaseContentProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function PhaseContent({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = ""
}: PhaseContentProps) {
  return (
    <div className={className}>
      <h2 className={`text-3xl font-semibold text-[#FFA100] ${titleClassName}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-3xl font-semibold text-center text-white ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
}
