import { Helmet } from "react-helmet";
import useCompanyInfoSchema from "../../hooks/useCompanyInfoSchema";

function CompanyInfo() {
  const structuredJSON = useCompanyInfoSchema();
  return (
    <Helmet>
      <script className="structured-data-list" type="application/ld+json">
        {JSON.stringify(structuredJSON)}
      </script>
    </Helmet>
  );
}

export default CompanyInfo;
