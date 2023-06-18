const endDate = " 10 Feb 2024   12:00 am "
document.getElementById("end-date").innerHTML = endDate;

const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()

    //  console.log(end)
    //  console.log(now)


    //total diff
    const diff = (end - now) / 1000;   // converetd to seconds
    //    console.log(diff)



    // if (diff = 0) {
    //     return ;
    // }

    // into days
    inputs[0].value = Math.floor(diff / 24 / 3600)



    // into hours
    inputs[1].value = Math.floor((diff / 3600) % 24)



    // into minutes
    inputs[2].value = Math.floor((diff / 60) % 60)



    // into sec
    inputs[3].value = Math.floor((diff) % 60)

}


// fun call
clock()


// refresh page after every seconds
setInterval(

    () => {
        clock()
    },
    1000            // 1 second=1-000 mili second 
)
