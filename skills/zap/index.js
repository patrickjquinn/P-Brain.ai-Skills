const http = require('http')
const config = require('../../config')
const services = require('./services.json')

const keys = config.get

const intent = () => ({
    keywords: ['switch to', 'switch to qqqq'],
    module: 'zap'
})

function * zap_resp(query) {
    const channel = query.split('to ')[1]
    const ref = getReference(channel)

    const isZapped = zap(ref)

    if (isZapped) {
        return {
            text: 'Zapped'
        }
    }
    return {
        text: 'Sorry, I couldnt switch to '+channel
    }
}

function zap(ref) {
    let state

    const options = {
        host: keys.zap.ip,
        path: '/api/zap?sRef=' + ref
    }

    const callback = function (response) {
        let str = ''
        response.on('data', chunk => {
            str += chunk
        })
        response.on('end', () => {
            const parsed = JSON.parse(str)
            state = parsed.result
        })
    }

    http.request(options, callback).end()
    return state
}

function getReference(channel) {
    return services[channel]
}

module.exports = {
    get: zap_resp,
    intent
}
