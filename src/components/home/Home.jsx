import React, { useState, useEffect, useContext } from 'react';
import './Home.scss';
import { useNavigate, Link, Route } from 'react-router-dom';

import LineModel, { lines } from '../../models/Line.model'

import html2canvas from 'html2canvas'

function Home() {
    const navigate = useNavigate();
    const [inputText, setInputText] = useState(new LineModel(0));
    const [contents, setContent] = useState(lines());


    /**
     * @type {LineModel[]}
     */
    const Xlines = lines()


    useEffect(() => {
    }, [])

    const printLine = (line) => {
        if (line == inputText.line) {
            return (
                <p className="text font-gg">{inputText.content}{'<>'}</p>
            )
        }

        return (
            <p className="text font-gg">{contents[line].content}</p>
        )
    }

    const renderLines = () => {
        const result = []
        contents.forEach(element => {
            result.push(
                <div className="line-view" key={element.line} >
                    <p className="text fl font-gg printed-view">{element.firstLine}</p>
                    {printLine(element.line)}
                </div>
            )
        });


        return result
    }

    const addLine = (e) => {
        if (inputText.line <= contents.length - 1) {
            contents[inputText.line].content = inputText.content
            setInputText(new LineModel(inputText.line + 1, ''))
            document.getElementById('typewriter-input').value = ''
        }

    }

    const newPage = () => {
        document.getElementById('typewriter-input').value = ''
        setInputText((new LineModel(0)))
        setContent(lines())
    }

    const updateLine = (e) => {
        setInputText(new LineModel(inputText.line, e))
    }

    const capturePage = () => {
        html2canvas(document.querySelector("#capture")).then(canvas => {
            var dataURL = canvas.toDataURL('image/png');
            var newTab = window.open('about:blank', 'image from canvas');
            newTab.document.write("<img src='" + dataURL + "' alt='from canvas'/>");
            newPage()
        });
    }

    return (
        <div className="body-all">
            <div className="top-view">
                <div className="title font-gg">Typewriter Letter</div>
            </div>
            <div className="page-view" id="capture">
                {renderLines()}
            </div>
            <div className="typewriter-view">
                <input maxLength="40" type="text" onChange={(e) => { updateLine(e.target.value) }} placeholder='Type your content' id="typewriter-input" className="typewriter-input font-gg" />
                <button className="enter-button font-gg" onClick={addLine}>Enter</button>
                <button className="print-button font-gg" onClick={capturePage}>Print</button>
                <button className="blank-button font-gg" onClick={newPage}>Blank page</button>
            </div>
            <div className="bottom-view">
                <div className="text font-gg">{'\u25CF'} 2022 {'\u25CF'}</div>
            </div>
        </div>
    )
}

Home.propTypes = {

}

export default Home