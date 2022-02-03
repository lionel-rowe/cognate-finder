import 'chota/dist/chota.css' // can't use .min.css due to CRA transpiling bug
import './styles.css'
import { render } from 'react-dom'
import { App } from './App'
import { exposeGlobals } from './debug'
import buildInfo from './buildInfo.json'

import { injectCssConstants } from './utils/cssConstants'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { initViewportHeightAdjuster } from './utils/viewportHeightAdjuster'

exposeGlobals()
injectCssConstants()
initViewportHeightAdjuster()

render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

console.info(`Build ${buildInfo.hash}\n${buildInfo.ts}`)
