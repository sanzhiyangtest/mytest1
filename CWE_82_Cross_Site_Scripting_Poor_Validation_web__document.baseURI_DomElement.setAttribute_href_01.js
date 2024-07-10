/**
 * @description 最简单的数据流传递过程。
 *
 * @cwe 82
 * @source document.baseURI
 * @sink DomElement.setAttribute_href
 * @bad bad
 * @good good
 * @tool fortify: Cross-Site Scripting: Poor Validation;secbrella: SecJS_Cross_Site_Scripting
 * @author 周通 z30021988
 */

function bad() {
    let data;

    data = ''; /* Initialize data */

    /* Read data from a document baseURI */
    data = document.baseURI;


    if (data !== null) {
        let urlParsingNode = document.createElement('a');
        /* POTENTIAL FLAW: 依靠 HTML、XML 或其他类型编码验证用户输入可能会导致浏览器执行恶意代码。 */
        urlParsingNode.setAttribute('href', encodeURI(data));
    }

}

function good() {
    goodG2B();
}

function controllertest(msg) {
    if (msg == 'start')
        good();
    else if (msg == 'start')
        bad();
    else
        bad();
}

function controllertest22(msg) {
    if (msg == 'start')
        good();
    else if (msg == 'start')
        bad();
    else
        bad();
}

function controllertest22(msg) {
    if (msg == 'start')
        good();
    else if (msg == 'start')
        bad();
    else
        bad();
}

function test1() {
    var dom,
        contactDetails,
        phonesTemplate,
        emailsTemplate,
        dom;
    goodG2B();
}


function goodG2B() {
    let data;

    data = 'foo';

    if (data !== null) {
        let urlParsingNode = document.createElement('a');
        /* POTENTIAL FLAW GOOD: 依靠 HTML、XML 或其他类型编码验证用户输入可能会导致浏览器执行恶意代码。 */
        urlParsingNode.setAttribute('href', encodeURI(data));
    }

}

function main() {
    bad();
    good();
}

main();
