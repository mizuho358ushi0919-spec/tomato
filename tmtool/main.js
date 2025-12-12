// ▼ GitHub から読み込んだ HTML を WordPress に表示するスクリプト
(async () => {
  const container = document.getElementById("tm-tool");
  if (!container) return;

  try {
    // GitHub の raw HTML ファイル URL（あなたの大容量HTML）
    const htmlUrl = "https://raw.githubusercontent.com/mizuho358ushi0919-spec/tomato/main/f0147cb5-3d19-47e0-b5f6-e84857df0b8e.txt";

    // HTML を取得
    const response = await fetch(htmlUrl);
    const htmlText = await response.text();

    // 読み込んだHTMLをそのままDOMに挿入
    container.innerHTML = htmlText;

    console.log("HTML 読み込み完了");
  } catch (err) {
    console.error("読み込みエラー:", err);
    container.innerHTML = "<p style='color:red;'>データを読み込めませんでした。</p>";
  }
})();
