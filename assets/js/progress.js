const progress_bars = document.querySelectorAll('.progress');

progress_bars.forEach(bar => {
	setTimeout(() => {
        const { size, total } = bar.dataset;
        var perc = (size/total)*100;
		bar.style.width = `${perc}%`
	}, 1000);
});