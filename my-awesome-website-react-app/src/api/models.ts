export interface Volumes {
    items: Volume[]
    totalItems: number;
}

export interface Volume {
    id: string;
    kind: string;
    volumeInfo: VolumeInfo
}

export interface VolumeInfo {
    title: string;
    publishedDate: string;
    authors: string[];
}