const trending = [
  { keyword: "Vector Infographics", category: "Business" },
  { keyword: "Logo Templates", category: "Branding" },
  { keyword: "Pattern Design", category: "Lifestyle" },
  { keyword: "Medical Icons", category: "Health" },
  { keyword: "Tech Diagrams", category: "Technology" }
];

const prompts = [
  { title: "Business Infographic", prompt: "Modern vector infographic with icons and charts" },
  { title: "Tech Illustration", prompt: "Minimalist technology vector in flat gradient style" }
];

function renderKeywords(list) {
  const container = document.getElementById("keywords");
  container.innerHTML = list.map(k => `
    <div class="p-5 bg-slate-800 rounded-xl border border-blue-500 hover:scale-[1.02] transition">
      <h3 class="text-lg font-bold text-blue-300 mb-2">${k.keyword}</h3>
      <p class="text-sm text-gray-400">${k.category}</p>
    </div>
  `).join("");
}

function renderPrompts() {
  const container = document.getElementById("prompts");
  container.innerHTML = prompts.map(p => `
    <div class="p-5 bg-slate-800 rounded-xl border border-blue-500">
      <h3 class="text-xl font-bold text-blue-300 mb-2">${p.title}</h3>
      <p class="text-sm text-gray-300">${p.prompt}</p>
    </div>
  `).join("");
}

document.getElementById("searchInput").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  const filtered = trending.filter(k => k.keyword.toLowerCase().includes(val));
  renderKeywords(filtered);
});

document.addEventListener("DOMContentLoaded", () => {
  renderKeywords(trending);
  renderPrompts();
});