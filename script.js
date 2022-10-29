// Առաջադրանքը
// Ունենում ենք 2 user
// Ամեմ մեկի մոտ տարբեր չափի գումար
// Էջը բացելու պետքա հարցնի որ user ով եք գնումներ անում
// Ամեն user ի մոտ ի՞նչ որ ֆիքսված գումար
// Ու մի քանի ապրանքներ կպահեք փոփոխականի մեջ
// Բոլոր քեյսերը հաշվի կառնեք
// Ինչ որ ապրանքներ գնելուց հետո վերջնահաշվարկ անի թէ ինչքանի գնումներ կատարեց ու ինչքան մնաց տվյալ user ի մոտ


let user1 = 900;
let user2 = 5000;
let first = 100;
let second = 300;
let third = 600;
let opshin = first + second + third;


alert(` ${opshin} $ arjoxutyamb apranq `);

let answer = prompt(`choose user1 or user2`);
    if (answer == `user1`){
        console.log(`user1 uni ${user1} $ `);
        if (user1>=opshin){
            console.log(`user1 Gnnec apranq@ hima ira mot mnac ${user1-opshin} $ `);
        }
        else{
            console.log(`${user1} $ chi heriqum apranq gnnelu hamar`);
        }
        
    }
    
    else if(answer == `user2`){
        console.log(`user2 uni ${user2} $ `);
        if (user2 >= opshin){
            console.log(`user2 gnec apranq@ ira mot mnac ${user2-opshin} $ `);
        }
        else{
            console.log(`${user2} $ chi heriqum apranq gnnelu hamar`);
        }

    }

    else{
       alert(`does not meet the requirements, try again.`);
    }