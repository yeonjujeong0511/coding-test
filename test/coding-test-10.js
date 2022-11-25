const kdt_invest = [2003, 1980, 1989, 1995, 2003, 2007, 2001, 2003, 1970, 1995];

function bar_chart(data) {
  const root = document.getElementById("root");

  function elementStyling(element, styleProps) {
    for (const key in styleProps) {
      element.style[key] = styleProps[key];
    }
  }

  const rootStlye = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "pink",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  };

  elementStyling(root, rootStlye);

  function makeTag(parent, tagName, html) {
    const tag = document.createElement(tagName);
    tag.innerHTML = html;
    parent.appendChild(tag);
  }

  const divArr = [];
  function makeDiv(tagname, tagcontent) {
    for (let i = 0; i < tagcontent.length; i++) {
      divArr.push(`<${tagname}>${tagcontent[i]}</${tagname}>`);
    }
    let joinArr = divArr.join("");
    return joinArr;
  }

  const joinArr = makeDiv("div", data);

  makeTag(root, "div", joinArr);

  const mainbox = root.childNodes[0];

  const mainboxStyling = {
    width: "1200px",
    height: "800px",
    borderBottom: "2px solid black",
    borderLeft: "2px solid black",
    display: "flex",
    paddingLeft: "20px",
    paddingRight: "20px",
    alignItems: "flex-end",
    justifyContent: "space-between",
    boxSizing: "border-box",
  };

  elementStyling(mainbox, mainboxStyling);

  const graph = mainbox.childNodes;

  for (let i = 0; i < graph.length; i++) {
    graph[i].style.width = "100px";
    graph[i].style.height = `${data[i] * 0.3}px`;
    graph[i].style.backgroundColor = "gray";
    graph[i].style.marginRight = "10px";
    graph[i].style.textAlign = "center";
    graph[i].style.boxSizing = "border-box";
  }
  console.dir(mainbox);
}

bar_chart(kdt_invest);
