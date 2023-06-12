import MinimalHomePage from "./home/minimal/page";
import { getAllPosts } from "@/lib/sanity/client";

export default async function IndexPage() {
  const posts = await getAllPosts();

  {/* @ts-expect-error Server Component */ }
  return <MinimalHomePage posts={posts} />;
}

// export const revalidate = 60;
