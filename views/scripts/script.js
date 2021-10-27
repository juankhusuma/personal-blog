if (!localStorage.getItem('theme')) {
	localStorage.setItem('theme', 'light');
} else {
	var theme = localStorage.getItem('theme');
	if (theme === 'light') {
		document.getElementById('toggle-indicator').className = 'bi bi-moon';
		document.body.className = '';
	}
	if (theme === 'dark') {
		document.getElementById('toggle-indicator').className = 'bi bi-sun';
		document.body.className = 'dark';
	}
}
function changeTheme() {
	var theme = localStorage.getItem('theme');
	if (theme === 'light') {
		document.getElementById('toggle-indicator').className = 'bi bi-sun';
		document.body.className = 'dark';
		localStorage.setItem('theme', 'dark');
		return;
	}
	if (theme === 'dark') {
		document.getElementById('toggle-indicator').className = 'bi bi-moon';
		document.body.className = '';
		localStorage.setItem('theme', 'light');
	}
}
document.getElementById('toggle').addEventListener('click', changeTheme);