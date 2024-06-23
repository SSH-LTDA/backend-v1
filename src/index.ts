import {app} from './app'

app.startServer(Number(process.env.PORT), () => {
	console.log(`Server is running on port ${process.env.PORT} 🚀`)
})
