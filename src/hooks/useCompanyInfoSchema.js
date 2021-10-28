import { useMemo } from "react";

const useCompanyInfoSchema = () =>
  useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin, Germany",
        postalCode: "10510",
        streetAddress: "123 Sesame Street",
      },
      email: "contact(at)seo-practices.org",
      name: "SEO Practices",
      telephone: "123-456-7890",
      description:
        "SEO Practices is the leading small scale SEO solution for many across the offline web... :D",
    }),
    []
  );

export default useCompanyInfoSchema;
