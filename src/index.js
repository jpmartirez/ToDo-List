const allTask = [];
displayTask();

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        document.querySelector(".addButton").click();
    }
});

function displayTask(){

    let taskOutput = ""; 

    allTask.forEach((task, index) => {
        taskOutput += `
            <div class="bg-black rounded-xl mb-3 flex gap-3 items-center justify-between py-4 px-6">
                <p class="font-bold text-lg text-white ">${index+1}. ${task}</p>
                <img class="delButton cursor-pointer w-[30px]" src="../icon/delete-1487-svgrepo-com.svg" onclick="
                    allTask.splice(${index}, 1);
                    displayTask();
                ">
            </div>
        `;  
    })

    document.querySelector(".taskOutput").innerHTML = taskOutput;
}

document.querySelector(".addButton").addEventListener("click", () => {
    const inputTask = document.querySelector(".inputTask").value;
    
    if (inputTask.length === 0) {
        alert("Please input a task");
    } else {
        allTask.push(inputTask);
        document.querySelector(".inputTask").value = "";
        displayTask();
    }
});

