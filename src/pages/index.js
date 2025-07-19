import Layout from '@theme/Layout';
import React from 'react';

export default function Home() {
  return (
    <Layout title="嗨，我是王則倫 Jaron">
      <main style={{ fontFamily: 'sans-serif', maxWidth: 720, margin: '80px auto', padding: '0 1em' }}>
        <h1>嗨，我是王則倫 Jaron</h1>
        <p>目前就讀於清華大學，喜歡影像創作、音樂製作與程式設計。</p>
        <p>這是我個人的網站，未來會放上更多關於我的資訊與作品。</p>
        <ul>
          <li><a href="/blog">進入貼文</a></li>
        </ul>
      </main>
    </Layout>
  );
}