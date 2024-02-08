# ブログ開発向けToDo

- 管理モジュール (テキスト基礎解析ツール)
    - [ ] keyword extraction (tag generation)
    - [ ] 記事関連度行列から, 記事url: [関連記事...] 的なjsonを作る at backend.

# Frontend開発

- v1 (Simple frontend component almost done.)
    - component view定義
        - postsの記事下部にCategory/Tagを表示する. (0.5h)
        - Categoryをフォルダから読み込む. (0.5h)
        - SideTagPane
        - SNS Link (0.5h)
        - Table (1h)
    - v2 (複雑なBackend処理連携・Frontendの高度な修正)
        - component view定義
            - responsive page content font size
            - Related Articles
        - component wrapper定義
            - TableOfContentsのカスタマイズ
                - TableOfContentのx軸を変えずに画面中に固定する.
                - 現在位置をactiveにする.
- v3 (自動化)
    - Keyphrase extractionによるtag自動追加.
    - Related Articles計算.

## 記事コンテンツ/categoryについて

- NLP
    - JAnthology周り
        - 著者可視化など
        - pkeの使い方
        - JAnthologyの注目 (月1)
    - sumire
- Tech
    - Frontend
        - Mantineなどについて
    - python関連?
    - DBの勉強?
    - PM関連
    - k8s
- 金融工学
    - 平均分散ポートフォリオ周り
- Daily