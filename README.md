# swiper-ui [![test/deployment](https://github.com/1keiuu/swiper-ui/actions/workflows/deploy.yml/badge.svg)](https://github.com/1keiuu/swiper-ui/actions/workflows/deploy.yml)

## 本番環境
https://swiper-ui.vercel.app

## 実装した機能
- [x] 下部のボタンでlike/nope/ユーザーのプロフィール確認ができる。
- [x] like/nopeのアニメーション。カードが反転するアニメーション。
- [x] スワイプを判定してカードを仕分けできるようにする。(スマホ対応 safari14のみ確認)
- [x] カードを仕分けし終わるとメッセージが表示される。(下部のボタンは押せなくなる) 
- [x] APIを作成。リクエストパラメータに応じてユーザーのモックデータをフロントへ返す。
- [x] jestによるreactコンポーネントの単体テスト
- [x] github actionsによるCI/CDの実装。テスト失敗時にはデプロイしないようにする。

## アピールポイント
- インフラまで含めた最小限のアプリケーション構成
- useContextによる状態管理
- webpack×babelでのフロントエンド環境構築
- eslintでコードの規則/安全性の担保

## 今後やりたい事
- ユーザーログインとマッチング機能
- DB作成/接続
- エラー監視
- コンテナデプロイのベストプラクティス模索
- テストが不完全なところの修正
- e2eテスト

## 使用した技術  
**Frontend**  
- Language: typescript  
- Framework: React(hooks)  
- Build tools: webpack(babel)  
- Hosting: vercel  

**Backend**  
- Language: golang  
- Hosting: heroku 

**Infra**  
- Docker  

## ローカルのセットアップ
docker-compose環境が必要です
```
docker-compose build
docker-compose run app npm install
docker-compose up
```

## その他メモ
- APIのレスポンスタイム
    - 本番環境はherokuのcold startがある為初回アクセス時はレスポンスが遅いです。
    - その後はフロントでローディングを挟みたいので、API側で2秒sleepさせてからレスポンスを返しています。
- テストとContextの構成はこの[zenn book](https://zenn.dev/tkdn/books/react-testing-patterns/viewer/context-and-testing)を参考に。
    - Contextに関わる部分であっても、コンポーネントのテストは原則表示と操作に関する物のみ。Contextは個別でテストを作成する。
