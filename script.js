const countDigit = document.querySelector(".count")
        let count = 0
        
        function increment(){
            count = count+ 1
            countDigit.textContent=count

        }

        const saveData = document.querySelector(".saved-data")

        function save (){
            saveData.textContent += " " + count + ', ' 
            countDigit.textContent=0
            count = 0
        }
