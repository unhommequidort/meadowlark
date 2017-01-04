suite('"About" Page tests', function() {
	test('page should contain link to a contact page', function() {
		assert($('a[href="/contact"]').length);
	});
});