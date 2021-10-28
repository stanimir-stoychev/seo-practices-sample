import BlogPreview from "../Blog/components/Preview";
import Hero from "./components/Hero";

function Page() {
  return (
    <>
      <Hero />
      <BlogPreview />
    </>
  );
}

Page.displayName = "Home page";

export default Page;
