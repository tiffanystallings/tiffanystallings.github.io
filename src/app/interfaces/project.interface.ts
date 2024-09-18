export interface Project {
    title: string;
    preview: string;
    category: string;
    description: string;
    skills: Array<string>;
    github: string;
    link?: string;
    featured: boolean;
    weight: number;
}

export interface ProjectCategory {
    label: string;
    name: string;

}

export interface ProjectData {
    categories: Array<ProjectCategory>;
    items: Array<Project>;
}