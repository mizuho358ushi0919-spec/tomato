(async () => {
  const container = document.getElementById("tm-tool");
  if (!container) return;

  try {
    const htmlUrl = "https://raw.githubusercontent.com/mizuho358ushi0919-spec/tomato/main/ラムネ.txt";
    const response = await fetch(htmlUrl);
    const htmlText = await response.text();
    container.innerHTML = htmlText;
  } catch (err) {
    console.error("読み込みエラー:", err);
    container.innerHTML = "<p style='color:red;'>データを読み込めませんでした。</p>";
  }
})();
