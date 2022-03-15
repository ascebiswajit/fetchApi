console.log("fetch the post data");
//for user data 
function getUserData(){
  url='https://jsonplaceholder.typicode.com/users?id=1';
    //     console.log("Started getData");
        fetch(url).then((response)=>{
            // console.log("inside first then");
            return response.json();
        }).then((data)=>{
            // console.log("inside second then");
            console.log(data);
    
            let data1="";
            data.map((values)=>{
                data1+=`
                <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-600">
                <img class="class="max-w-full h-auto rounded-full items-center" src="/fetch/user/user.jpg" alt="" width="384" height="512">
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4" ${values.id}>
                <h2 class="font-bold text-lg mb-2 ">Name: ${values.name}</h2>
                  <blockquote>
                    <p class="text-lg font-medium">
                     " Address:-${JSON.stringify(values.address)}"
                    </p>
                  </blockquote>
                  <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                     <p>phone:  ${values.phone}</p>
                     <p>website:  ${values.website}</p>
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                      Company Details :- ${JSON.stringify(values.company)}
                    </div>
                  </figcaption>
                </div>
              </figure>`;
            });
        
            document.getElementById("card").innerHTML=data1;
        }).catch((err)=>{
            console.log(err);
        });
    }
    getUserData();
    
    function getData(){
        //     console.log("Started getData");
            url=('https://jsonplaceholder.typicode.com/users/1/posts');
            fetch(url).then((response)=>{
                // console.log("inside first then");
                return response.json();
            }).then((data)=>{
                // console.log("inside second then");
                console.log(data);
        
                let data1="";
                data.map((values)=>{
                    data1+=`
                    <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                
                      <img class="h-30 object-cover rounded-x1" h-30 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">
                      <div class="p-2">
                    
                      <h3 class="font-bold text-lg mb-2 ">Title:-${values.title} </h3>
                      
        
                
                      
                      <p class="text-sm text-gray-600"><strong>Description:-</strong>${values.body}</p>
                      </div>
            
                      <div class="m-2">
                      <a role='button'#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
                      <a role='button' href='#'class="delete" class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Delete</a>
                      </div>
                    </div>`;
                });
            
                document.getElementById("posts").innerHTML=data1;
            }).catch((err)=>{
                console.log(err);
            });
        }
        getData();
        // let post1=document.querySelector('#post1');
        // let delButton=document.querySelector('.delete');
        // delButton .addEventListener("click",()=>{
        //     post1.remove();
            
        // });