
const elementOnload = element => new Promise((resolve) => {
  if (element.readyState) {
    element.onreadystatechange = function () {
      if (element.readyState == 'loaded' || element.readyState == 'complete') {
        element.onreadystatechange = null;
        resolve();
      }
    };
  } else {
    element.onload = resolve;
  }
});

async function dynamicFile(url) {
  const head = document.getElementsByTagName('head')[0];
  const urlList = typeof url === 'string' ? [ url ] : url;
  const objList = [];
  urlList.map((url) => {
    const type = /\.[^\.]+$/.exec(url)[0];
    switch (type) {
    case '.js': {
      var element = document.createElement('script');
      element.setAttribute('type', 'text/javascript');
      element.src = url;
      objList.push(element);
      break;
    }
    case '.css': {
      var element = document.createElement('link');
      element.href = url;
      element.setAttribute('rel', 'stylesheet');
      element.setAttribute('media', 'all');
      element.setAttribute('type', 'text/css');
      objList.push(element);
      break;
    }
    default:
      break;
    }
  });

  try {
    await Promise.all(objList.map((i) => {
      head.appendChild(i);
      return elementOnload(i);
    }));
  } catch (error) {
    console.log(error);
  }
}


export default dynamicFile;
