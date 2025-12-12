// ▼ GitHub の HTML（ラムネ.txt）を WordPress に表示するスクリプト
(async () => {
  const container = document.getElementById("tm-tool");
  if (!container) return;

  try {
    // GitHub にアップロードしたファイル（ラムネ.txt）のURL
    const htmlUrl = "https://raw.githubusercontent.com/mizuho358ushi0919-spec/tomato/main/ラムネ.txt";

    // HTML を取得
    const response = await fetch(htmlUrl);
    const htmlText = await response.text();

    // 読み込んだHTMLをそのまま挿入
    container.innerHTML = htmlText;

    console.log("HTML 読み込み完了");
  } catch (err) {
    console.error("読み込みエラー:", err);
    container.innerHTML = "<p style='color:red;'>データを読み込めませんでした。</p>";
  }
})();
