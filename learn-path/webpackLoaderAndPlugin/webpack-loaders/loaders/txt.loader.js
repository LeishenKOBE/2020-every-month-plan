function loader(source, map) {
	let res = `
        document.body.innerHTML = ${JSON.stringify(source)} 
    `;
	return res;
}

module.exports = loader;
