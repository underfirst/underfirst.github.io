import { Tooltip } from './Tooltip';

export default {
  title: 'Popover',
};

export const Usage = () => {
  return <Tooltip content="テキストの事例">aaaa</Tooltip>;
};

export const LongerUsage = () => {
  return (
    <Tooltip
      content={
        <>
          OAuth
          2.0は、ユーザーが自分のデータを安全に第三者アプリケーションと共有できるようにするための標準プロトコルです。
          <br />
          例えば、SNSアカウントでログインする機能や、カレンダーアプリがメールアカウントの予定を読み取る機能など、日常の多くのサービスでOAuth
          2.0が背後で動作しています。
        </>
      }
    >
      長いコンテンツの事例
    </Tooltip>
  );
};
