function renderDropdownCases(filteredData) {
  const container = document.getElementById("logSubmission-container");
  const files = filteredData?.filenames;

  if (!Array.isArray(files) || files.length === 0) {
    container.innerHTML = "<p>No data available to display.</p>";
    return;
  }

  files?.forEach(function (item) {
    var option = document.createElement("option");
    const fileName = item?.split(".md")[0];
    option.text = fileName;
  });
  
  const dropdown = document.getElementById("contract-dropdown");
  const branch_name = dropdown.options[dropdown.selectedIndex].text;
  renderCases(branch_name, files[0]?.split(".md")[0]);
}

function renderCases(branchName, file) {
  fetch(
    `https://raw.githubusercontent.com/ondc-official/ONDC-SRV-Specifications/${branchName}/api/components/docs/${file}.md`
  )
    .then((response) => response.text())
    .then((text) => {
      const html = marked.parse(text);
      document.getElementById("logSubmission-container").innerHTML = html;
    });
}
