import { HomeTemplate } from '../templates/home-template.js'

import { isLocalhost } from '../globals.js'

const Home = {
	template: HomeTemplate,
	components: {

	},
	data: function() {
		return {
			isLocalhost: isLocalhost
		}
	}
}

export default Home