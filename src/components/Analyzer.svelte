<script lang="ts">
	type MorphemeWithEtymology = {
		text: string;
		type: 'root' | 'prefix' | 'suffix';
		etymology: string;
	};

	type Analysis = {
		word: string;
		etymology: string;
		morphemes_with_etymology: MorphemeWithEtymology[];
	};

	type AnalysisResponse = {
		status: '' | 'loading' | 'success' | 'not found' | 'error';
		data: Analysis | null;
	};

	let word = '';

	let analysisResponse: AnalysisResponse = {
		status: '',
		data: null
	};

	const fetchAnalysis = async () => {
		analysisResponse.status = 'loading';
		analysisResponse.data = null;

		try {
			const response = await fetch(`https://morphology-etymology-analyzer.fly.dev/${word}`);

			switch (response.status) {
				case 200:
					analysisResponse.status = 'success';
					analysisResponse.data = (await response.json()) as Analysis;
					break;
				case 404:
					analysisResponse.status = 'not found';
					break;
				default:
					analysisResponse.status = 'error';
					break;
			}
		} catch (_) {
			analysisResponse.status = 'error';
		}
	};
</script>

<label for="word">Word:</label>
<input name="word" type="text" placeholder="word" bind:value={word} />
<button on:click={fetchAnalysis}>Analyze</button>

{#if analysisResponse.status === 'loading'}
	<h3>Loading</h3>
{:else if analysisResponse.status === 'not found'}
	<h3>Not Found</h3>
{:else if analysisResponse.status === 'error'}
	<h3>There was an error analyzing this word</h3>
{:else if analysisResponse.status === 'success'}
	<h3>Result for "{analysisResponse.data?.word}":</h3>
	<p>Etymology: {analysisResponse.data?.etymology}</p>
{/if}
