function getData() {
  //     console.log("Started getData");
  url = ('https://jsonplaceholder.typicode.com/posts/1/comments');
  fetch(url).then((response) => {
    // console.log("inside first then");
    return response.json();
  }).then((data) => {
    // console.log("inside second then");
    console.log(data);

    let data1 = "";
    data.map((values) => {
      data1 += `
                <div class="p-2 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h3 class="text-gray-900 text-lg title-font font-medium">Name:-${values.name}<span text-blue-400 text-sm > [postId:${values.postId}&Id:${values.id}]</span></h3>

                  </div>
                  <div class="flex-grow">
                  <p class="mb-2></p>
                    <p class="leading-relaxed  ">comment:${values.body}</p>
                    <a class="mt-3 text-indigo-400 inline-flex">
                      ${values.email}
                    </a>
                    <a role='button' href='#'  id="delete-post" class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Delete</a>
                    </div>
                  </div>
                </div>
              </div>   `;
    });

    document.getElementById("comments").innerHTML = data1;
  }).catch((err) => {
    console.log(err);
  });
}
getData();