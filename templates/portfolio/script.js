const lastUpdated = document.querySelector("#last-updated");

if (lastUpdated) {
  lastUpdated.textContent = `最終更新: ${new Date(document.lastModified).toLocaleDateString("ja-JP")}`;
}
