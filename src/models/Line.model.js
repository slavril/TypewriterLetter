export default class LineModel {

    line = null
    content = ''
    firstLine = '-'

    constructor(line, content = '') {
        this.line = line
        this.content = content
    }

}

export const lines = () => {
    const lines = []
    for (let index = 0; index < 24; index++) {
        lines.push(new LineModel(index))
    }

    return lines
}
