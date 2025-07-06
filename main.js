async function loadCSV() {
  const res = await fetch('data/articles.csv');
  const text = await res.text();
  const lines = text.trim().split('\n').slice(1); // ヘッダー除去
  const container = document.getElementById('article-container');

  lines.forEach(line => {
    const [id, title, content, audioPath] = line.split(',');

    if (!id || !audioPath) return;

    const div = document.createElement('div');
    div.className = 'article';

    div.innerHTML = `
      <h2>${title}</h2>
      <p>${content}</p>
      <audio controls>
        <source src="${audioPath.trim()}" type="audio/mpeg">
        ブラウザが audio タグをサポートしていません。
      </audio>
    `;
    container.appendChild(div);
  });
}

window.onload = loadCSV;
