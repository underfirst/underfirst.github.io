import { getAllPosts } from '@/lib/api';
import { ListPage } from '@/components/ListPage/ListPage';

export default function Index() {
  const allPosts = getAllPosts();

  return <ListPage allPosts={allPosts} />;
}
