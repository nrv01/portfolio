export interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    tags: string[];
    liveUrl?: string;
    repoUrl?: string;
};
