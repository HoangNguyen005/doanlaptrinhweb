
start()
function start() {
    handleEvent()
}


function handleEvent() {

    // Thay doi quang cao sau 6 giay
    changeAdvertises()
    function changeAdvertises(index = 0) {
        const advertises = document.querySelectorAll('.advertise img')
        advertises.forEach(element => {
            element.style.display = 'none'
        })

        
        if(index >= advertises.length) index = 0;
        advertises[index].style.display = 'block'  
        index++
        setTimeout(function() {
            changeAdvertises(index)
        }, 6000)
    }


    // Thay doi layout khi click
    document.querySelector('.layout-icon-1').onclick = function(e) {
        document.querySelector('.layout-section.active').classList.remove('active')
        e.target.classList.add('active')
        document.querySelector('.layout.active').classList.remove('active')  

        document.querySelector('.layout-1').classList.add('active')  
    }
    document.querySelector('.layout-icon-2').onclick = function(e) {
        document.querySelector('.layout-section.active').classList.remove('active')
        
        e.target.classList.add('active')
        document.querySelector('.layout.active').classList.remove('active')  

        document.querySelector('.layout-2').classList.add('active')  
    }



    function selecter(formInputs) { 
        // items.onclick = function(e) {
        //     console.log(e.target)
        //     // console.log(e.target.style.className = 'field-value')
        //     for(let i = 0; i < e.target.children.length; i++) {
        //         // console.log(e.target.children[i].classList.contains('field-value'))
        //         if(e.target.children[i].classList.contains('field-value')) {
        //             var fieldValue = e.target.children[i]
        //         }
        //         if (e.target.children[i].classList.contains('list-item')) {
        //             const listItem = e.target.children[i]
                   
        //             listItem.classList.toggle('hidden')
        //             for(let index in listItem.children) {
        //                 listItem.children[index].onclick = (e) => {
        //                     fieldValue.innerText = e.target.innerText
        //                     listItem.classList.toggle('hidden')
    
        //                 }
        //             }
        //         }
                
        //     }
        // }
    
        formInputs.forEach(formInput => {
            formInput.onclick = () => {
                const ulElement = formInput.querySelector('ul.list-item')
              
                const fieldValue = formInput.querySelector('.field-value')
                ulElement.classList.toggle('active')
                const childs = ulElement.children
                for(let i = 0; i < childs.length; i++) {
                    childs[i].onclick = (e) => {
                        fieldValue.innerText = e.target.innerText
                       
                    }
                }
            }
    
        })
      
    }
    
    const formInputs = document.querySelectorAll('.form-input')
    selecter(formInputs)

}




