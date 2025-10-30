function fetchData() {
  const resultList = document.getElementById("apiResult");
  resultList.innerHTML = "<li>Loading...</li>";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      resultList.innerHTML = "";
      data.slice(0, 5).forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} – ${user.email}`;
        resultList.appendChild(li);
      });
    })
    .catch(() => {
      resultList.innerHTML = "<li style='color:red;'>Failed to fetch data.</li>";
    });
}
