import { Stack } from '@mantine/core';
import { ArticleCard } from './ArticleCard';

export default {
  title: 'elements/ArticleCard',
};

export const Usage = () => {
  return (
    <Stack>
      <ArticleCard
        href="/posts/url"
        category={{ title: 'NLP', href: '/NLP' }}
        tags={[
          { title: 'Transformer', href: 'transformer' },
          { title: 'GPT', href: 'GPT' },
        ]}
        title="いいいいいいいいいいいいいいいいいいいいいいい"
        date="2023-10-10"
        content="ああああああああああああああああああああああああああああああああああああああああああああああああああああ"
      />
    </Stack>
  );
};
