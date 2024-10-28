function convertFilters() {
  const input = document.getElementById("inputArea").value;

  const lines = input.split('\n');
  const output = lines.map(line => {
    line = line.trim();

    if (line === '' || line.startsWith("#")) {
      return '';
    }

    if (line.startsWith("0.0.0.0 ") || line.startsWith("127.0.0.1 ")) {
      const domain = line.split(" ")[1];
      if (domain) return `||${domain}^`;
    }

    return '';
  }).filter(Boolean);
  document.getElementById("outputArea").value = output.join('\n');
}