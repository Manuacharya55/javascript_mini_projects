const fontStyles = document.querySelectorAll('.font-styles');
const editorBoard = document.querySelector('#text-board');
const alignment = document.querySelectorAll('.alignment');
const fontFamily = document.querySelector('#font-family');
const fontSize = document.querySelector('#font-size');
const FontColor = document.querySelector('#text-color');
const BackgroundColor = document.querySelector('#background-color');

function replaceSelectedNode(styleType, styleValue) {
    const select = window.getSelection();
    const span = document.createElement('p');
    span.appendChild(select.getRangeAt(0).cloneContents());

    if (styleValue == 'normal') {
        span.style.fontWeight = styleValue;
        span.style.fontStyle = styleValue;
        span.style.textDecoration = 'none'
    } else {
        span.style[styleType] = styleValue;
    }
    
    select.getRangeAt(0).deleteContents();
    select.getRangeAt(0).insertNode(span);
}


function aligningText(alignment) {
    replaceSelectedNode('textAlign', alignment);
}

function fontWeightStyling(style) {
    let styleType, styleValue;
    switch (style) {
        case 'bold':
            styleType = 'fontWeight';
            styleValue = style;
            break;
        case 'italic':
            styleType = 'fontStyle';
            styleValue = style;
            break;
        case 'underline':
            styleType = 'textDecoration';
            styleValue = style;
            break;
        case 'normal':
            styleType = 'fontWeight';
            styleValue = 'normal';
            break;
    }
    replaceSelectedNode(styleType, styleValue);
}

fontStyles.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('selected')) {
            fontWeightStyling('normal');
            button.classList.remove('selected');
        } else {
            fontWeightStyling(button.getAttribute('id'));
            button.classList.add('selected');
        }
    })
})

alignment.forEach((button) => {
    button.addEventListener('click', () => {
        aligningText(button.getAttribute('id'));
    })
})


fontFamily.addEventListener('change', () => {
    replaceSelectedNode('fontFamily', fontFamily.value);
})

fontSize.addEventListener('change', () => {
    document.querySelector('.font-size').innerHTML = fontSize.value;
    replaceSelectedNode('fontSize', `${fontSize.value}px`)
})

FontColor.addEventListener('change', () => {
    replaceSelectedNode('color', FontColor.value)
})

