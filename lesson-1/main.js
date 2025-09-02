const tracks = [
	{ title: 'Musicfan soundtrack', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3' },
	{ title: 'Musicfan soundtrack instrumental', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3' },
]

const rootEl = document.getElementById('root');

const headerEl = document.createElement('h1')
headerEl.textContent = 'Musicfun Player'
rootEl.append(headerEl)

const tracksEl = document.createElement('ul')
tracks.forEach(item => {
	const trackEl = document.createElement('li')
	
	const trackWrapper = document.createElement('div')
	trackWrapper.append(item.title)
	trackEl.append(trackWrapper)
	
	const trackAudioEl = document.createElement('audio')
	trackAudioEl.controls = true;
	trackAudioEl.src = item.url
	trackEl.append(trackAudioEl)
	
	tracksEl.append(trackEl)
})
rootEl.append(tracksEl)
