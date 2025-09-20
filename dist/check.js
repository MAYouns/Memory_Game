if (location.href.includes("file://")) {
    document.body.innerHTML = `
          <p class="text-center py-10 w-8/12 my-10 mx-auto bg-red-600 text-white text-xl rounded">
            To run the game, please run 'index.html' file with live server in VSCode :)
          </p>
          `;
} else {
    document.body.classList = 'class="font-[cursive] bg-[url(../assets/bg_body.jpg)]';
    document.getElementById('app').classList = 'container sm:w-[630px] mx-auto my-6 select-none relative';
}