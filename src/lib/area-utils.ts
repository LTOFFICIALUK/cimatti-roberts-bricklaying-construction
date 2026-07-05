import { getProjectLocation } from "@/lib/project-utils";
import type { Project } from "@/lib/projects";

export const getProjectsForArea = (
  areaName: string,
  items: Project[],
): Project[] =>
  items.filter((project) => {
    const location = getProjectLocation(project);
    if (!location) return false;
    return location.toLowerCase().includes(areaName.toLowerCase());
  });
