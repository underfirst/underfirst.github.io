import { getCategories, getCategoryPosts } from '@/lib/api';
import { ListPage } from '@/components/ListPage/ListPage';

type Params = {
  params: {
    slug: string;
  };
};

export default function Index({ params }: Params) {
  const categoriesPosts = getCategoryPosts(params.slug);
  return <ListPage listType="Category" listTitle={params.slug} allPosts={categoriesPosts} />;
}

export async function generateStaticParams() {
  const categories = getCategories();

  return categories.map((category) => ({
    slug: category,
  }));
}
