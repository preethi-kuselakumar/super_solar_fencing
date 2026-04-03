import WorksGalleryClient from "@/app/works/WorksGalleryClient";
import { getCatalogProjects } from "@/lib/catalogData";

export default async function WorksPage() {
  const projects = await getCatalogProjects();

  return <WorksGalleryClient projects={projects} />;
}
