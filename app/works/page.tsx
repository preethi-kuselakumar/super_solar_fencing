import { ProjectSection } from "@/components/ProjectSection";
import { PageHeader } from "@/components/PageHeader";
import { getCatalogProjects } from "@/lib/catalogData";

export default async function WorksPage() {
  const projects = await getCatalogProjects();

  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      <PageHeader 
        title="Our Projects" 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Works" }]} 
      />
      <div className="pt-16">
        <ProjectSection isHomepage={false} projects={projects} />
      </div>
    </main>
  );
}
