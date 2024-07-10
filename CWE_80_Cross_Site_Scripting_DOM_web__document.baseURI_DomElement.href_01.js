/**
 * @description 最简单的数据流传递过程。
 *
 * @cwe 80
 * @source document.baseURI
 * @sink DomElement.href
 * @bad bad
 * @good good
 * @tool fortify: Cross-Site Scripting: DOM;secbrella: SecJS_Cross_Site_Scripting
 * @author 周通 z30021988
 */

function bad() {
    let data;

    data = ''; /* Initialize data */

    /* Read data from a document baseURI */
    data = document.baseURI;


    if (data !== null) {
        let urlParsingNode = document.createElement('a');
        /* POTENTIAL FLAW: 向一个 Web 浏览器发送未经验证的数据会导致该浏览器执行恶意代码。 */
        urlParsingNode.href = data;
    }

}

function good() {
    goodG2B();
}

function goodG2B() {
    let data;

    data = 'foo';

    if (data !== null) {
        let urlParsingNode = document.createElement('a');
        /* POTENTIAL FLAW GOOD: 向一个 Web 浏览器发送未经验证的数据会导致该浏览器执行恶意代码。 */
        urlParsingNode.href = data;
    }

}

function main() {
    bad();
    good();
}

main();