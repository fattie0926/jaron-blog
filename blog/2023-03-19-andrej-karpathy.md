---
slug: andrej-karpathy
title: Andrej Karpathy
---
大概半年前偶然關注到 [Andrej Karpathy](https://karpathy.ai/)（Tesla 前 AI 部門主管，今年二剛月重返 OpenAI ）， 在他的[頻道](https://www.youtube.com/@AndrejKarpathy)上看到神經網絡（Neural Network）的入門介紹，讓我從完全不懂 AI 跟什麼 back propagation、跑去問數學老師梯度下降是什麼碗糕，還有一邊洗澡一邊看 [3Blue1Brown](https://www.youtube.com/@3blue1brown) 的[微積分教學](https://youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr)，各種荒謬的學習過程。到現在稍微對神經網路的學習有點概念、能做一些極度簡單的應用等。

不到半年的時間，Open AI 已經有 ChatGPT 跟 GTP-4、微軟兩天前發表了 Copilot、Google發佈會時[找不到 Demo 手機](https://youtu.be/npV4Kix7Td0?t=567)的 Bard，還有繪圖相關的 Midjourney 等，這快速進步根本超越指數型成長跟我的想像。

<!-- truncate -->

好像說了有點多，本來是想分享一下我用 karpathy/[nanoGPT](https://github.com/karpathy/nanoGPT) 加上我跟好友的 LINE 對話紀錄訓練出來的一個小語言模型，雖然我生成出來的結果有點莫名其妙，但能在有這麼淺的技術背景底下做出一個能生成文字的模型還是讓我蠻驚艷的！

以下是我用 nanoGPT 訓練後，讓模型生成的片段，看起來超莫名其妙：

:::note nanoGPT 的輸出
好友：買  
王則倫：剛家拼到比校在影片的，你爸題就想，我回，14好友 而且剛出去前直接不會往你  
王則倫：我可喜方，我回找我提面的時候拍頭，掰，感謝好友 拿禮數要來碰，腳週六  
王則倫：好好笑，結果我會了  
好友：每次東西，你又沒在走，好好笑  
王則倫：我體育課，對  
好友：維持牙手機  
王則倫：你電視敘嗎，絕齊換我們下手機的話就用什麼那  
好友：口的  
王則倫：我晚睡覺  
好友：誰，你回為是12.2  
王則倫：要懂我的晚，好好笑，當須  
好友：好好笑  
王則倫：蛤，好好笑  
好友：因為我是說王則倫 這幾老師的  
好友：不猜看你，但他，絕對了了  
王則倫：我是沒在問文感加，並不一樣，打錯，然後這獎
:::

BTW，前期有很多資料處理都是請 ChatGPT 幫我用 Python 做的，過往如果我自己寫的話可能要花上好幾個小時，ChatGPT 大概只要 10 秒差不多，還會教我讀懂他的 Code：）