import { getTagPosts, getTags } from '@/lib/api';
import { ListPage } from '@/components/layouts/ListPage/ListPage';

type Params = {
  params: {
    slug: string;
  };
};
export default function Index({ params }: Params) {
  const tagsPosts = getTagPosts(params.slug);
  return <ListPage allPosts={tagsPosts} />;
}

export async function generateStaticParams() {
  const tags = getTags();

  return tags.map((tag) => ({
    slug: tag,
  }));
}
