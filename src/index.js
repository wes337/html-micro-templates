const stringToElement = (variable, element) => variable.string.replace(
    /\${([^}]+)\}/gi,
    (matched) => {
        const variableName = matched.substr(2, matched.length -3)
        return `<${element} class='variable ${variableName}'>${variable.value}</${element}>`
    }
)

const elementToString = html => html.replace(
    /<([^>]+?)([^>]*?)>(.*?)<\/\1>/ig,
    (matched) => {
        const variableName = matched.match(/class='variable\s(.*?)'/i)
        return `\${${variableName[1]}}`
    }
)

const parseHTML = (html, delimiter = false) => {
    var matches = []
    html.replace(
        /<([^>]+?)([^>]*?)>(.*?)<\/\1>/ig,
        (matched) => {
            matched.replace(/class='variable\s([^']+)\'/igm, function (m, p1) {
                delimiter
                    ? matches.push(`\${${p1}}`)
                    : matches.push(p1)
            })
        }
    )
    return matches
}

module.exports = {
    stringToElement, elementToString, parseHTML
}