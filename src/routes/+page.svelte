<script>
	import Analyzer from '../components/Analyzer.svelte';
</script>

<h1>Morphology Etymology Analyzer Demo</h1>

<h2>
	See the API repo at: <a
		href="https://github.com/AdamPodoxin/Morphology-Etymology-Analyzer"
		target="_blank"
		referrerpolicy="no-referrer">https://github.com/AdamPodoxin/Morphology-Etymology-Analyzer</a
	>
</h2>

<p>
	Morphological analysis provided by the <a
		href="https://pypi.org/project/morphemes/"
		target="_blank"
		referrerpolicy="no-referrer">morphemes</a
	> Python module.
</p>

<p>
	Etymology scraped from <a
		href="https://www.etymonline.com/"
		target="_blank"
		referrerpolicy="no-referrer">Etymonline</a
	>.
</p>

<Analyzer />
