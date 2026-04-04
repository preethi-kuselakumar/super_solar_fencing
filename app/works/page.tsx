import { ProjectSection } from "@/components/ProjectSection";
import { PageHeader } from "@/components/PageHeader";

export default function WorksPage() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      <PageHeader 
        title="Our Projects" 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Works" }]} 
      />
      <div className="pt-16">
        <ProjectSection isHomepage={false} />
      </div>
    </main>
  );
}
