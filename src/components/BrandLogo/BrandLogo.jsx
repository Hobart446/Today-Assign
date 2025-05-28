import { hasClassProps } from "@utils/helpers";

function BrandLogoLight({ className }) {
  return (
    <>
      <img
        className={`logo-dark${hasClassProps(className)}`}
        src="/image/today-assign/logo_today_assign.png"
        alt="Today Assign"
        style={{ maxHeight: "60px", width: "auto" }}
      />
    </>
  );
}

function BrandLogoDark({ className, logoUrl = "/image/today-assign/logo_today_assign.png" }) {
  return (
    <>
      <img
        className={`logo-light${hasClassProps(className)}`}
        src={logoUrl}
        alt="Today Assign"
        style={{ maxHeight: "60px", width: "auto" }}
      />
    </>
  );
}

export default function BrandLogo({ className, type, logoUrl }) {
  let logoSettings = {
    className,
    type,
    logoUrl,
  };
  if (type === "white") {
    return <BrandLogoLight {...logoSettings} />;
  } else {
    return <BrandLogoDark {...logoSettings} />;
  }
}
