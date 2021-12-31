const btn1 = document.getElementById('btn1');
		btn1.addEventListener("click",()=>{
			fetch('http://localhost/online2/backend.php?id=1')
			.then(response => response.json())
			.then(data => { 
				document.getElementById("ques1").innerHTML = JSON.stringify(data.content[0].QUESTION);
				const ans = prompt("Enter the ans :")
				if(ans == data.content[0].ANSWER ){
					document.getElementById("result1").innerHTML = "correct"
				}else{
					document.getElementById("result1").innerHTML = "incorrect"
				}
			})	
		})
		
		const btn2 = document.getElementById('btn2');
		btn2.addEventListener("click",()=>{
			fetch('http://localhost/online2/backend.php?id=2')
			.then(response => response.json())
			.then(data => { 
				document.getElementById("ques2").innerHTML = JSON.stringify(data.content[0].QUESTION);
				const ans = prompt("Enter the ans :")
				if(ans == data.content[0].ANSWER ){
					document.getElementById("result2").innerHTML = "correct"
				}else{
					document.getElementById("result2").innerHTML = "incorrect"
				}
			})	
		})

		const btn3 = document.getElementById('btn3');
		btn3.addEventListener("click",()=>{
			fetch('http://localhost/online2/backend.php?id=3')
			.then(response => response.json())
			.then(data => { 
				document.getElementById("ques3").innerHTML = JSON.stringify(data.content[0].QUESTION);
				const ans = prompt("Enter the ans :")
				if(ans == data.content[0].ANSWER ){
					document.getElementById("result3").innerHTML = "correct"
				}else{
					document.getElementById("result3").innerHTML = "incorrect"
				}
			})	
		})