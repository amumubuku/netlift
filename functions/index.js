// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
	switch (event.httpMethod) {
		case 'GET':
			try {
				const name = event.queryStringParameters.name || 'World';
				return {
					statusCode: 200,
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ message: `Hello ${name}` })
				};
			} catch (err) {
				return { statusCode: 500, body: err.toString() };
			}

		default:
			return { statusCode: 405, body: 'Method Not Allowed' };
	}
};
