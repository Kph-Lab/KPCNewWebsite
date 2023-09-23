---
title: "ロボカップ班部誌"
author: "Koki Muramoto"
icon: "🤖"
tags: ["2023年度文化祭"]
---

これはロボカップ班が今回制作したロボットについての説明です。
![image](/images/blog/robocup.png)

## このロボットの概要
RoboCup@Home Educationに出場するためにロボットを制作しています。
最終的には自律移動、物体把持、人追従のような一般的な家庭に溶け込めるような機能を盛り込む計画になります。
名前がまだついていません。

## ハードウェア
- 一番下の土台はルンバで、古い型のものを再利用して使っています。あとから解説するROSというプラットフォームから簡単に制御ができて、ロボット界隈では有名な足回りです。
- 中間にはLiDARと呼ばれる360°の物体を認識できるセンサーがついています。これを使ってロボットの周囲の障害物を検知することができます。
- 上部にはアームがついていて、これを使って物体を把持します。
- 同じ場所にノートパソコンがある土台があります。動かすときはここに乗るノートPCからすべての命令が送られます。
- 一番上にはRealSenseと呼ばれるカメラを設置していて、これにより周囲の状況を把握したり、人間を追従したり、物体認識をしてモノを把持したり障害物を回避したりするのに使います。
- RealSenseに関しては画角を上下させるための機構を追加する予定ですが、それ以外はほぼ完成形です。

## ソフトウェア
ROS(Robot Operation System)と呼ばれるロボットの制御をやりやすくするためのプラットフォームを利用し、開発をしています。ロボットには上で解説したような様々な要素で構成されていて、これをまとめて1つのロボットとして動作させることが必要になります。そのために、それぞれの部品の動作をそれぞれ別のプログラムで管理して、データの共有をパイプを繋いで行うという制御をすることによって、複雑な機構をしたロボットでも制御しやすくする、という仕組みのものです。

## 今後の課題
基盤モデル、という大規模なデータを用いて学習された汎用的なモデルなどを取り入れた開発を行うこと、安定して動くような環境構築をすることなどがある。
あとは今年入った新入班員に対しての講座を行っているので、自分を後継してくれる人を育てることが目標です。
