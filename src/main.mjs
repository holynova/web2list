class Tool {
  videoWebToNewsList(url) {}
  getLinks() {
    let links = document.getElementsByTagName("a");
    const res = [];
    // 遍历所有的<a>标签
    for (let i = 0; i < links.length; i++) {
      let link = links[i];
      let text = link.textContent || link.innerText; // 获取链接文本
      let href = link.href; // 获取链接href属性
      res.push({
        text,
        href,
      });
    }
  }
}

function main() {
  let t = new Tool();
}

function getLinks() {
  let links = document.getElementsByTagName("a");
  const res = [];
  // 遍历所有的<a>标签
  for (let i = 0; i < links.length; i++) {
    let link = links[i];
    let text = link.textContent || link.innerText; // 获取链接文本
    let href = link.href; // 获取链接href属性
    res.push({
      text,
      href,
    });
  }
  return res;
}
let list = getLinks();
