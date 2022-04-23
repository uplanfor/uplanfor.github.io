function download (filename, content) 
{
    // create hidden link
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // turn the content of your article into BLOB 
    var blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    // let user download file
    document.body.appendChild(eleLink);
    eleLink.click();
    // destory link
    document.body.removeChild(eleLink);
}
function open_article()
{
    document.getElementById("open_file").click();
}
function read_file(self, event) {
    var title = self.value.substring(self.value.lastIndexOf("\\") + 1);
    title = title.substring( 0, title.lastIndexOf("."));
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        document.getElementById("content").value = event.target.result;
        document.getElementById("title").value = title;
    };

    reader.readAsText(file);
}
function save_article()
{
    var title = document.getElementById("title").value;
    if (title.replace(/\s*/g,"").length == 0)
    {
        title = '未命名';
    }
    var content = document.getElementById("content").value;
    download(title + ".txt", content);
}

function SaveStorage()
{
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    window.localStorage.setItem("title", JSON.stringify(title));
    window.localStorage.setItem("content", JSON.stringify(content));
}

function main()
{
    // read the local storage of an article
    var title_memory = window.localStorage.getItem("title");
    var content_memory = window.localStorage.getItem("content");
    if (title_memory)
    {
        // set the title of the notepad
        document.getElementById("title").value = JSON.parse(title_memory);
    }
    if (content_memory)
    {
        // set the content of the notepad
        document.getElementById("content").value = JSON.parse(content_memory);
    }
    setInterval(SaveStorage, 30000);
}
window.onload = main;