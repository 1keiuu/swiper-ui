# swiper-ui

## 本番環境
https://swiper-ui.vercel.app

## 実装した機能
- [x] 下部のボタンでlike/nope/ユーザーのプロフィール確認ができる。
- [x] like/nopeのアニメーション。カードが反転するアニメーション。
- [x] スワイプを判定してカードを仕分けできるようにする。(スマホ対応 safari14のみ確認)
- [x] カードを仕分けし終わるとメッセージが表示される。(下部のボタンは押せなくなる) 
- [x] APIを作成。リクエストパラメータに応じてユーザーのモックデータをフロントへ返す。

## アピールポイント

- useContextによる状態管理

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
