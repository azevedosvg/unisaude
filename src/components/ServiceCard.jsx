import * as LucideIcons from "lucide-react";

export function ServiceCard({
  title,
  description,
  icon,
  category,
  featured,
  cta,
}) {
  const Icon = LucideIcons[icon] || LucideIcons.Circle;
  const { ArrowRight } = LucideIcons;

  return (
    <div
      className={`card h-100 border-0 shadow-sm rounded-4 ${featured ? "border border-success border-2" : ""}`}
      style={{
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {featured && (
        <div className="position-absolute top-0 end-0 m-3">
          <span className="badge bg-success rounded-pill">⭐ Popular</span>
        </div>
      )}

      <div className="card-body p-4 d-flex flex-column gap-3">
        <div
          className="rounded-3 d-flex align-items-center justify-content-center bg-success bg-opacity-10"
          style={{ width: 48, height: 48 }}
        >
          <Icon size={22} className="text-success" />
        </div>

        <span
          className="badge rounded-pill px-3 py-1 align-self-start badge-brand"
          style={{ fontSize: "11px" }}
        >
          {category}
        </span>

        <h5 className="card-title fw-semibold text-dark mb-0">{title}</h5>

        <p className="card-text text-secondary small flex-grow-1">
          {description}
        </p>

        <button className="btn btn-link text-success text-decoration-none p-0 d-flex align-items-center gap-1 fw-semibold small align-self-start">
          {cta} <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
