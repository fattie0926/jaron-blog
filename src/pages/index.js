import Layout from '@theme/Layout';
import React from 'react';

export default function Home() {
  return (
    <Layout title="Jaron.Wang - 我的貼文和創作空間">
      <main style={{ fontFamily: 'sans-serif', maxWidth: 720, margin: '80px auto', padding: '0 1em' }}>
        <h1>👋 嗨，我是則倫</h1>

        <p>
          歡迎你來到這裡。這是我離開社群媒體之後，放下演算法焦慮、重新找回創作節奏的空間。
        </p>

        <h2>✨ 貼文區</h2>
        <p>
          這裡就像是我的 IG、Facebook、Threads 合體版 —— 但只有我說了算。
          自 2025 年起，我開始嘗試不再使用社群媒體，改在這裡記錄觀察、想法與創作背後的故事。
        </p>
        <p>
          👉 <a href="/blog">點這裡前往貼文列表</a>
        </p>

        <h2>📌 其他區塊（即將上線）</h2>
        <ul>
          <li><strong>筆記：</strong>創作流程、工具研究、跨領域學習記錄（籌備中）</li>
          <li><strong>作品：</strong>過去拍過的影片、音樂與技術專案（整理中）</li>
          <li><strong>關於我：</strong>不只是創作者，也是一個一直在路上的人</li>
        </ul>

        <hr style={{ margin: '2em 0' }} />

        <p style={{ fontSize: '0.9em', color: '#666' }}>
          📮 如果你對這個網站有任何回饋，或只是想聊聊近況，歡迎來信：<a href="mailto:hi@fattie.io">hi@fattie.io</a>
        </p>
      </main>
    </Layout>
  );
}