import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function NotFound() {
  const { t } = useApp();
  return (
    <div className="page page-hero">
      <h1>{t("notFound")}</h1>
      <Link className="btn primary" to="/">
        {t("backHome")}
      </Link>
    </div>
  );
}
