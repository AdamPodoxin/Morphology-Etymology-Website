word_field = document.getElementById("word-field");

prefixes_table = document.getElementById("prefixes");
suffixes_table = document.getElementById("suffixes");

const analyze = () => {
	word = word_field.value;
	word_field.value = "";

	fetch(`https://morphology-etymology.herokuapp.com/analyze?word=${word}`)
		.then((response) => response.json())
		.then((data) => {
			populate_fields(data.prefixes, data.root, data.suffixes);
		});
};

const populate_fields = (prefixes, root, suffixes) => {
	populate_root(root);
	populate_table(prefixes_table, prefixes);
	populate_table(suffixes_table, suffixes);
};

const populate_root = (root) => {
	root_morph_text = document.getElementById("root-morph");
	root_etym_text = document.getElementById("root-etym");

	root_morph_text.innerText = root.morph;
	root_etym_text.innerText = root.etym;
};

const populate_table = (table, array) => {
	tbody = table.querySelector("tbody");
	tbody.innerText = "";

	array.forEach((element) => {
		tr = document.createElement("tr");

		td_morph = document.createElement("td");
		td_type = document.createElement("td");
		td_etym = document.createElement("td");

		td_morph.innerText = element.morph;
		td_type.innerText = element.type;
		td_etym.innerText = element.etym;

		tr.appendChild(td_morph);
		tr.appendChild(td_type);
		tr.appendChild(td_etym);

		tbody.appendChild(tr);
	});
};
