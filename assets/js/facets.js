import jQuery from 'jquery';
import _ from 'underscores';

const facetTerms = document.querySelectorAll( '.widget_ep-facet .terms' );

/**
 * Drill down facet choices
 */
jQuery( facetTerms ).on( 'keyup', '.facet-search', _.debounce( ( event ) => {
	if ( 13 === event.keyCode ) {
		return;
	}

	const searchTerm = event.currentTarget.value.replace( /\s/g, '' );
	const terms = event.delegateTarget.querySelectorAll( '.term' );

	terms.forEach( ( term ) => {
		var slug = term.getAttribute( 'data-term-slug' );
		var name = term.getAttribute( 'data-term-name' );

		if ( name.includes( searchTerm ) || slug.includes( searchTerm ) ) {
			term.classList.remove( 'hide' );
		} else {
			term.classList.add( 'hide' );
		}
	} );
}, 200 ) );
