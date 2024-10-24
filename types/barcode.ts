export type SymDesc = {
  [key: string]: {
    sym: string;
    desc: string;
    text: string;
    opts: string;
    format: string;
  }
}

export type GenParams = {
  bcid: string | undefined;
  text: string;
  altText: string;
}