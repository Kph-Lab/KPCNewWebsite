---
title: "プロジェクションマッピング班部誌2"
author: "Koki Muramoto"
icon: "🪩"
tags: ["2023年度文化祭"]
---

プロジェクションマッピング班の作品のもう一つは、UnityとRealSenseを用いたリアルタイムモーションキャプチャ作品です。
リアルタイムで人の動きを認識し、エフェクトなどをつけて表示します。
![image](/images/blog/motion_capture.png)

## 作品の概要
UnityとRealSenseを用いて通信を行い、映った人をリアルタイムでエフェクトをつけて表示するものです。
プロジェクションマッピングする必要は別にないのですが、お客さんが体験するという意味で見やすいので必要だと思ってます。

## 必要なもの
- PC
- macでもwindowsでも環境構築ができてUnityが動くだけの性能があればなんでもよし
- プロジェクター
- 映像を投影するのに使います。
- 物理科のホワイトボードについているモノを使いました↑
- 深度センサー
- D415というカメラをintel(RealSense)様からお借りしております
- 三脚、脚立など
- プロジェクター、深度センサーを固定するのに使います。
- ある程度の高さに固定できれば正味なんでもいいです

## 使うソフトウェア
- C#
- librealsense/RealSenseSDK(RealSenseを扱うためのドライバ)
- Graph(Unity/Visual Effect)(エフェクトを作るのに必要です)

## しくみ
Graph(RealSenseから深度情報と画像情報を取得し、ある一定の距離に入っている点群の一つ一つにVisual Effect)というGPUパーティクルをかぶせます。そうするとなぜかキレイに映ります。
深度情報を取得するpointcloudbakerというライブラリを使うのがキモで、keijiroさんというUnityの神が作った神ライブラリです
ちなみに一ミリも人間を認識などはしていません。その辺の棒でも範囲に入ってれば映ります。
背景に何もない状態で人が映りこむと人の輪郭が出てそれっぽく見えます。
depthとcolor両方使うものとdepthだけとるモデルがあります

## 現状の課題
人によってこの作品に対する反応に差がある
効果的な展示ができているのかわからない