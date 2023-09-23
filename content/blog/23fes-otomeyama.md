---
title: "御留山の湧水自動計測してみた"
author: "Koki Muramoto"
icon: "🏞️"
tags: ["2023年度文化祭"]
---

このプロジェクトは地学部が長年足を運び続けて湧水量を調べてきた御留山の湧水の計測を自動化するプロジェクトで、気象観測機器コンテストの一次審査を通過しており、現在進行中のプロジェクトです。
地学部に所属~~させられた~~している村本が地学部コラボの一環としてこの活動を行うことになりました。(ほぼ僕がやってます)
二次審査の準備もかねて書いてます。
(写真入れたら完成)

## 必要なもの
- アクリル箱(水がある程度入れれてある程度加工できてある程度強度があればなんでもいいです)
- 赤外線センサー(秋月で500円)
- 発泡スチロール(上と合わせて水の深さを計ります)
- 塩ビパイプ(センサーなどの土台になります)
- Arduino、ラズパイ等計算通信資源(今回メインではないので適当に)
- 箱(上の計算資源を守ります)
- 絶縁テープ等(上の計算資源から出てるケーブルを水から守ります)

## しくみ
湧水地点にこの装置を置き、アクリル箱の中での水の深度を計測し、流れ出す口の大きさを含めて計算すれば時間あたりの流れる水の量を計測することができます。
発泡スチロールを水に浮かべて上から赤外線センサーでそれを計測すれば水の深さがわかります。
定期的にデータをとり、ラズパイなどに保存します。これが安定したら適当にモバイルルーターとか使ってIoTをアピールできるように環境を構築して自動で計測結果を送信して蓄積できると言える状態にします。

## 感想
赤外線センサーは一発で動いたので、過去に触ったことがあるということは大きいと思いました。
他の懸念は水関係だと思います。濡れないようにしなければ。

## 課題
水が極端に多くても少なくても正確に測れない可能性があるので、その下限を担保することが計測機器として必要になります。
塩ビパイプで覆うことによってノイズを削減、落ち葉の対策をすることができるため、その改善を今やっています。
