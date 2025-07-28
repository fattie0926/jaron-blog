import Layout from '@theme/Layout';
import React from 'react';

export default function Home() {
  return (
    <Layout title="Jaron 的貼文">
      <main style={{ fontFamily: 'sans-serif', maxWidth: 720, margin: '80px auto', padding: '0 1em' }}>
        <h1>👋 嗨，我是則倫</h1>

        <p>
          歡迎你來到這裡。這是我離開社群媒體之後，放下演算法、重新找回創作節奏的空間。
        </p>

        <h2>✨ 貼文區</h2>
        <p>
          這裡就像是我各個社群軟體的合體版 —— 但只有我說了算。
          自 2025 年起，我開始嘗試不再使用社群媒體，改在這裡記錄觀察、想法與創作背後的故事。
        </p>
        <p style={{ textAlign: 'center', margin: '2em 0' }}>
          <a 
            href="/blog" 
            style={{
              display: 'inline-block',
              backgroundColor: '#f5f5f5',
              color: '#333',
              padding: '0.75em 1.5em',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '1.05em',
              border: '1px solid #ccc',
              transition: 'background-color 0.2s ease, border-color 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#e0e0e0';
              e.target.style.borderColor = '#999';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#f5f5f5';
              e.target.style.borderColor = '#ccc';
            }}
          >
            👉 前往貼文列表
          </a>
        </p>

        <h2>📌 其他區塊（即將上線，敬請期待）</h2>
        <ul>
          <li><strong>筆記：</strong>創作流程、工具研究、跨領域學習記錄</li>
          <li><strong>作品：</strong>過去拍過的影片、音樂與技術專案</li>
          <li><strong>關於我：</strong>不只是影像創作者</li>
        </ul>

        <hr style={{ margin: '2em 0' }} />

        <p style={{ fontSize: '0.9em', color: '#666' }}>
          📮 如果你對這個網站有任何回饋，或只是想聊聊近況，歡迎來信：<a href="mailto:hi@fattie.io">hi@fattie.io</a>
        </p>
      </main>
    </Layout>
  );
}