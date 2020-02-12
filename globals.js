const isLocalhost = ( 
	function() {
		return window.location.href.startsWith('http://localhost')
	}() 
)

export { isLocalhost }