export interface Params {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}
