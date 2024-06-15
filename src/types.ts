export interface ServiceImage {
  src: string;
  alt: string;
}

export interface Service {
  name: string;
  description: string;
  images: ServiceImage[];
}
