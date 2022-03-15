console.log("come to the learnning fetch api");
let users=document.querySelector('#cards');
let posts=document.querySelector('#post');
let userData='';


const renderPost=(post)=>{
    post.map((values)=>{
        userData+=`
        <div class="p-2" data-id=${values.id}>
        <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        
        <img class="h-30 object-cover rounded-x1" h-30 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">
        <p></p>
        <h2 class="font-bold text-lg mb-2 ">${values.name}</h2>
           
        
        
        <p class="text-sm text-gray-600" mb-2>${values.email}</p>
        
        
        
        <a role='button' href='#' class="recipe-btn" class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
        <a role='button' href='#' id="delete-post" class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Delete </a>
        </div>
        </div>`;
    });
    // console.log(values.id);
    
    users.innerHTML=userData;
}

let url='https://jsonplaceholder.typicode.com/users';

    //     console.log("Started getData");
    fetch(url).then((response)=>{
        // console.log("inside first then");
        return response.json();
    }).then((data)=>{
        return renderPost(data);
        console.log(data);

        // data.map((values)=>{
        //     userData+=`
        //     <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        
        //       <img class="h-30 object-cover rounded-x1" h-30 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">
        //       <div class="p-2">
            
        //       <h2 class="font-bold text-lg mb-2 ">${values.name}</h2>
              

        
              
        //       <p class="text-sm text-gray-600">${values.email}</p>
        //       </div>
    
        //       <div class="m-2">
        //       <a role='button' href='/fetch/user/1/post.html' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
        //       <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Delete </a>
        //       </div>
        //     </div>`;
        // });
    
        // users.innerHTML=userData;
    // }).catch((err)=>{
    //     console.log(err);
    });
    //delete the post
    users.addEventListener('click',(e)=>{
        e.preventDefault();
    
        let delButtonIsPressed=e.target.id=='delete-post';
        let id = e.target.parentElement.parentElement;

        // console.log("hdsjg",e.target.parentElement)
        

        if(delButtonIsPressed){
            console.log('delete clicked on '+ id);
            fetch(`${url}/${id.dataset.id}`,{
                method:'DELETE',
            })
            .then(response=>response.json())
            .then(()=>{
                console.log(id.dataset.id)
                id.remove();
                console.log((id.dataset.id) +" "+"is deleted")
            });

            
            // ;
        }
    });
 
    
    // users.addEventListener('click',showMore);
    users.addEventListener('click',learnMore);
    
    // function showMore(e){
    //     e.preventDefault();
    //     if(e.target.classList.contains('recipe-btn')){
    //         let Item = e.target.parentElement.parentElement;
    //         fetch(`https://jsonplaceholder.typicode.com/users?id=${Item.dataset.id}`)
    //         .then(response => response.json())
    //         .then(data =>
    //             getUserData(data)
    //             // getPostData(data)
    //             )
    //         }
    //     }
        function learnMore(e){
            e.preventDefault();
            if(e.target.classList.contains('recipe-btn')){
                let Item = e.target.parentElement.parentElement;
                fetch(`https://jsonplaceholder.typicode.com/users/${Item.dataset.id}/posts`)
                .then(response => response.json())
                .then(data =>
                    // getUserData(data)
                    getPostData(data)
                    )
                }
            }
            
        // console.log(Item.dataset.id)



    function getUserData(values){
        // let url='https://jsonplaceholder.typicode.com/users';
              console.log(values);
            //   fetch(url).then((response)=>{
            //       // console.log("inside first then");
            //       return response.json();
            //   }).then((data)=>{
            //       // console.log("inside second then");
            //     //   console.log(data);
          
                  let data1="";
                  values.map((values)=>{
                 data1+=`
                      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-600">
                      <img class="class="max-w-full h-auto rounded-full items-center" src="user.jpg" alt="" width="384" height="512">
                      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
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
              
                  document.getElementById("cards").innerHTML= data1;
            //   }).catch((err)=>{
            //       console.log(err);
            //   });
          }
          



          function getPostData(values){
              console.log(values);
            // let url='https://jsonplaceholder.typicode.com/users';
          let data="";
          values.map((values)=>{
              data+=`
              <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                
              <img class="h-30 object-cover rounded-x1" h-30 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">
              <div class="p-2">
            
              <h3 class="font-bold text-lg mb-2 ">Title:-${values.title} </h3>
              <p class="text-blue-400 text-sm mb-2 ">ID:-${values.id} & userId:${values.userId} </p>

        
              
              <p class="text-sm text-gray-600"><strong>Description:-</strong>${values.body}</p>
              </div>
    
              <div class="m-2">
              <a role='button'#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
              <a role='button' href='#'  id="delete-post" class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Delete</a>
              </div>
            </div>`;
          });

          document.getElementById("cards").innerHTML= data;
        }




































































        // else{
    //     console.log(e);
    //     window.open(window.location.host+'/post.html')
    // }

    // This will return all the posts that belong to the first user
// fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
// .then((response) => response.json())
// .then((json) => console.log(json));






/*



function get2Data(){
    //     console.log("Started getData");
        url='https://jsonplaceholder.typicode.com/users?id=2';
        fetch(url).then((response)=>{
            // console.log("inside first then");
            return response.json();
        }).then((data)=>{
            // console.log("inside second then");
            console.log(data);
    
            let data3="";
            data.map((values)=>{
                data3+=`
                <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            
                  <img class="h-30 object-cover rounded-x1" h-30 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">
                  <div class="p-2">
                
                  <h2 class="font-bold text-lg mb-2 ">${values.name}</h2>
                  
    
            
                  
                  <p class="text-sm text-gray-600">${values.email}</p>
                  </div>
        
                  <div class="m-2">
                  <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">post</a>
                  <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Delete</a>
                  </div>
                </div>`;
            });
        
            document.getElementById("card2").innerHTML=data3;
        }).catch((err)=>{
            console.log(err);
        });
    }
    
    function get3Data(){
        //     console.log("Started getData");
            url='https://jsonplaceholder.typicode.com/users?id=3';
            fetch(url).then((response)=>{
                // console.log("inside first then");
                return response.json();
            }).then((data)=>{
                // console.log("inside second then");
                console.log(data);
        
                let data3="";
                data.map((values)=>{
                    data3+=`
                    <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                
                      <img class="h-30 object-cover rounded-x1" h-30 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">
                      <div class="p-2">
                    
                      <h2 class="font-bold text-lg mb-2 ">${values.name}</h2>
                      
        
                
                      
                      <p class="text-sm text-gray-600">${values.email}</p>
                      </div>
            
                      <div class="m-2">
                      <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">post</a>
                      <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Delete</a>
                      </div>
                    </div>`;
                });
            
                document.getElementById("card3").innerHTML=data3;
            }).catch((err)=>{
                console.log(err);
            });
        }
    function get4Data(){
            //     console.log("Started getData");
                url='https://jsonplaceholder.typicode.com/users?id=4';
                fetch(url).then((response)=>{
                    // console.log("inside first then");
                    return response.json();
                }).then((data)=>{
                    // console.log("inside second then");
                    console.log(data);
            
                    let data3="";
                    data.map((values)=>{
                        data3+=`
                        <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    
                          <img class="h-30 object-cover rounded-x1" h-30 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">
                          <div class="p-2">
                        
                          <h2 class="font-bold text-lg mb-2 ">${values.name}</h2>
                          
            
                    
                          
                          <p class="text-sm text-gray-600">${values.email}</p>
                          </div>
                
                          <div class="m-2">
                          <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">post</a>
                          <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Delete</a>
                          </div>
                        </div>`;
                    });
                
                    document.getElementById("card4").innerHTML=data3;
                }).catch((err)=>{
                    console.log(err);
                });
            }
    function get5Data(){
            //     console.log("Started getData");
                url='https://jsonplaceholder.typicode.com/users?id=5';
                fetch(url).then((response)=>{
                    // console.log("inside first then");
                    return response.json();
                }).then((data)=>{
                    // console.log("inside second then");
                    console.log(data);
            
                    let data3="";
                    data.map((values)=>{
                        data3+=`
                        <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    
                          <img class="h-30 object-cover rounded-x1" h-30 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">
                          <div class="p-2">
                        
                          <h2 class="font-bold text-lg mb-2 ">${values.name}</h2>
                          
            
                    
                          
                          <p class="text-sm text-gray-600">${values.email}</p>
                          </div>
                
                          <div class="m-2">
                          <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">post</a>
                          <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Delete</a>
                          </div>
                        </div>`;
                    });
                
                    document.getElementById("card5").innerHTML=data3;
                }).catch((err)=>{
                    console.log(err);
                });
            }
    function get6Data(){
                //     console.log("Started getData");
                    url='https://jsonplaceholder.typicode.com/users?id=6';
                    fetch(url).then((response)=>{
                        // console.log("inside first then");
                        return response.json();
                    }).then((data)=>{
                        // console.log("inside second then");
                        console.log(data);
                
                        let data3="";
                        data.map((values)=>{
                            data3+=`
                            <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                        
                              <img class="h-30 object-cover rounded-x1" h-30 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">
                              <div class="p-2">
                            
                              <h2 class="font-bold text-lg mb-2 ">${values.name}</h2>
                              
                
                        
                              
                              <p class="text-sm text-gray-600">${values.email}</p>
                              </div>
                    
                              <div class="m-2">
                              <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">post</a>
                              <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Delete</a>
                              </div>
                            </div>`;
                        });
                    
                        document.getElementById("card6").innerHTML=data3;
                    }).catch((err)=>{
                        console.log(err);
                    });
                }
    function get7Data(){
                    //     console.log("Started getData");
                        url='https://jsonplaceholder.typicode.com/users?id=7';
                        fetch(url).then((response)=>{
                            // console.log("inside first then");
                            return response.json();
                        }).then((data)=>{
                            // console.log("inside second then");
                            console.log(data);
                    
                            let data3="";
                            data.map((values)=>{
                                data3+=`
                                <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                            
                                  <img class="h-30 object-cover rounded-x1" h-30 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">
                                  <div class="p-2">
                                
                                  <h2 class="font-bold text-lg mb-2 ">${values.name}</h2>
                                  
                    
                            
                                  
                                  <p class="text-sm text-gray-600">${values.email}</p>
                                  </div>
                        
                                  <div class="m-2">
                                  <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">post</a>
                                  <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Delete</a>
                                  </div>
                                </div>`;
                            });
                        
                            document.getElementById("card7").innerHTML=data3;
                        }).catch((err)=>{
                            console.log(err);
                        });
                    }
    function get8Data(){
                        //     console.log("Started getData");
                            url='https://jsonplaceholder.typicode.com/users?id=8';
                            fetch(url).then((response)=>{
                                // console.log("inside first then");
                                return response.json();
                            }).then((data)=>{
                                // console.log("inside second then");
                                console.log(data);
                        
                                let data3="";
                                data.map((values)=>{
                                    data3+=`
                                    <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                                
                                      <img class="h-30 object-cover rounded-x1" h-30 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">
                                      <div class="p-2">
                                    
                                      <h2 class="font-bold text-lg mb-2 ">${values.name}</h2>
                                      
                        
                                
                                      
                                      <p class="text-sm text-gray-600">${values.email}</p>
                                      </div>
                            
                                      <div class="m-2">
                                      <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">post</a>
                                      <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Delete</a>
                                      </div>
                                    </div>`;
                                });
                            
                                document.getElementById("card8").innerHTML=data3;
                            }).catch((err)=>{
                                console.log(err);
                            });
                        }
    function get9Data(){
                            //     console.log("Started getData");
                                url='https://jsonplaceholder.typicode.com/users?id=9';
                                fetch(url).then((response)=>{
                                    // console.log("inside first then");
                                    return response.json();
                                }).then((data)=>{
                                    // console.log("inside second then");
                                    console.log(data);
                            
                                    let data3="";
                                    data.map((values)=>{
                                        data3+=`
                                        <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                                    
                                          <img class="h-30 object-cover rounded-x1" h-30 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">
                                          <div class="p-2">
                                        
                                          <h2 class="font-bold text-lg mb-2 ">${values.name}</h2>
                                          
                            
                                    
                                          
                                          <p class="text-sm text-gray-600">${values.email}</p>
                                          </div>
                                
                                          <div class="m-2">
                                          <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">post</a>
                                          <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Delete</a>
                                          </div>
                                        </div>`;
                                    });
                                
                                    document.getElementById("card9").innerHTML=data3;
                                }).catch((err)=>{
                                    console.log(err);
                                });
                            }
    function get10Data(){
                                //     console.log("Started getData");
                                    url='https://jsonplaceholder.typicode.com/users?id=10';
                                    fetch(url).then((response)=>{
                                        // console.log("inside first then");
                                        return response.json();
                                    }).then((data)=>{
                                        // console.log("inside second then");
                                        console.log(data);
                                
                                        let data3="";
                                        data.map((values)=>{
                                            data3+=`
                                            <div class="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                                        
                                              <img class="h-30 object-cover rounded-x1" h-30 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">
                                              <div class="p-2">
                                            
                                              <h2 class="font-bold text-lg mb-2 ">${values.name}</h2>
                                              
                                
                                        
                                              
                                              <p class="text-sm text-gray-600">${values.email}</p>
                                              </div>
                                    
                                              <div class="m-2">
                                              <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">post</a>
                                              <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Delete</a>
                                              </div>
                                            </div>`;
                                        });
                                    
                                        document.getElementById("card10").innerHTML=data3;
                                    }).catch((err)=>{
                                        console.log(err);
                                    });
                                }
                                get2Data();
    get3Data();
    get4Data();
    get5Data();
    get6Data();
    get7Data();
    get8Data();
    get9Data();
    get10Data();
*/
    
    

// console.log("before running getData")
// console.log("After running getData")