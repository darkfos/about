interface Component {
  id: number;
  __component: string;
}

interface FormatImage {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface ImageBlock extends Component {
  alt: string;
  isHeader?: boolean;
  img?: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption?: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: FormatImage;
      medium: FormatImage;
      small: FormatImage;
      large: FormatImage
    },
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata: null;
    folderPath: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
  }
}

export interface TextBlock extends Component {
  header?: string | null;
  text: Array<{
    type: string;
    children?: Array<{
      type: string;
      text: string;
    }>;
  }>;
}


export type Components = ImageBlock | TextBlock;
