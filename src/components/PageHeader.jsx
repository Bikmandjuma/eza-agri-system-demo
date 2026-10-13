import { Link } from "react-router-dom";

export default function PageHeader({ icon: Icon, title, subtitle }) {
  return (
    <section className="page-header">
      <div className="container">
        <p className="page-header__crumb">
          <Link to="/">Home</Link> / {title}
        </p>
        <h1>
          {Icon && <Icon size={30} aria-hidden="true" />} {title}
        </h1>
        {subtitle && <p className="page-header__sub">{subtitle}</p>}
      </div>
    </section>
  );
}
